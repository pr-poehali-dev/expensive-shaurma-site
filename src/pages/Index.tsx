import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const menuItems = [
    {
      name: 'Императорская',
      price: '2 500 ₽',
      description: 'Мраморная говядина, трюфельный соус, фуа-гра, золотая фольга',
      weight: '450г'
    },
    {
      name: 'Царская',
      price: '1 800 ₽',
      description: 'Премиальная баранина, соус из белых грибов, пармезан',
      weight: '400г'
    },
    {
      name: 'Королевская',
      price: '1 500 ₽',
      description: 'Филе индейки, крем-сыр с трюфелем, руккола, вяленые томаты',
      weight: '380г'
    },
    {
      name: 'Люкс',
      price: '1 200 ₽',
      description: 'Телятина, соус бешамель с шафраном, микс салатов',
      weight: '350г'
    }
  ];

  const reviews = [
    {
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Никогда не думал, что шаурма может быть настолько изысканной. Императорская — это шедевр!',
      date: '15 октября 2024'
    },
    {
      name: 'Елена М.',
      rating: 5,
      text: 'Восхитительное сочетание вкусов. Подача на уровне ресторанов высокой кухни.',
      date: '12 октября 2024'
    },
    {
      name: 'Александр П.',
      rating: 5,
      text: 'Царская шаурма превзошла все ожидания. Стоит каждого рубля!',
      date: '8 октября 2024'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-4xl">👑</span>
            <h1 className="text-2xl md:text-3xl font-serif text-primary">Царская Шаурма</h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Меню', 'О нас', 'Доставка', 'Отзывы'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            className="bg-primary text-secondary hover:bg-primary/90"
            onClick={() => scrollToSection('меню')}
          >
            Заказать
          </Button>
        </div>
      </nav>

      <section id="главная" className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/65a2cf3c-6387-46c8-b03c-b4845214c920/files/667ff026-8325-4ed4-b1f7-0a24517de7d2.jpg)' }}
        />
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-serif text-secondary mb-6 leading-tight">
              Самая дорогая<br />
              <span className="text-primary">шаурма</span><br />
              в Ростове
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Авторская кухня высшего уровня в формате уличной еды
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
              <Button 
                size="lg" 
                className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8 py-6"
                onClick={() => scrollToSection('меню')}
              >
                Посмотреть меню
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-secondary hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (863) 000-00-00
              </Button>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-scale-in">
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">🥩</div>
                <h3 className="text-xl font-serif text-secondary mb-2">Премиум ингредиенты</h3>
                <p className="text-muted-foreground">Только лучшее мясо и деликатесы</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-serif text-secondary mb-2">Шеф-повар</h3>
                <p className="text-muted-foreground">Опыт в мишленовских ресторанах</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-serif text-secondary mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">30 минут в любую точку центра</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="меню" className="relative py-20 px-4 bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/65a2cf3c-6387-46c8-b03c-b4845214c920/files/d5333c15-e410-4429-a9ae-00166d1382fb.jpg)' }}
        />
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif text-primary text-center mb-4">Наше меню</h2>
          <p className="text-center text-primary/80 mb-12 text-lg">Каждое блюдо — произведение искусства</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card 
                key={item.name} 
                className="bg-background border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-2xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-serif text-secondary">{item.name}</h3>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{item.weight}</span>
                    <Button className="bg-primary text-secondary hover:bg-primary/90">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о нас" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary text-center mb-12">О нас</h2>
          
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Мы переосмыслили традиционную шаурму, создав уникальный формат премиальной уличной еды. 
              Наш шеф-повар, работавший в ресторанах со звёздами Мишлен, применяет высокие кулинарные 
              стандарты к каждому блюду.
            </p>
            
            <Card className="bg-secondary border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif text-primary mb-4">Наша философия</h3>
                <p className="text-primary/90">
                  Мы используем только премиальные ингредиенты: мраморную говядину, трюфели, фуа-гра 
                  и авторские соусы. Каждая шаурма готовится индивидуально и подаётся в элегантной упаковке.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-serif text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Заказов в день</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary mb-2">5★</div>
                <p className="text-muted-foreground">Средний рейтинг</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary mb-2">15</div>
                <p className="text-muted-foreground">Лет опыта шефа</p>
              </div>
              <div>
                <div className="text-4xl font-serif text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Качество</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="доставка" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-serif text-primary text-center mb-12">Доставка</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background border-primary/30">
              <CardContent className="p-8">
                <Icon name="Clock" className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-serif text-secondary mb-3">Время доставки</h3>
                <p className="text-muted-foreground mb-4">
                  30-45 минут в пределах центра Ростова-на-Дону
                </p>
                <p className="text-sm text-muted-foreground">
                  Работаем с 11:00 до 23:00 ежедневно
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-primary/30">
              <CardContent className="p-8">
                <Icon name="MapPin" className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-serif text-secondary mb-3">Зона доставки</h3>
                <p className="text-muted-foreground mb-4">
                  Центральный, Пролетарский, Ленинский районы
                </p>
                <p className="text-sm text-muted-foreground">
                  Доставка от 1000 ₽ — бесплатно
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-background border-primary/30 mt-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif text-secondary mb-4 text-center">Как заказать</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="font-semibold text-secondary mb-2">Позвоните</h4>
                  <p className="text-sm text-muted-foreground">+7 (863) 000-00-00</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🛵</div>
                  <h4 className="font-semibold text-secondary mb-2">Ждите курьера</h4>
                  <p className="text-sm text-muted-foreground">В термосумке премиум-класса</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="font-semibold text-secondary mb-2">Наслаждайтесь</h4>
                  <p className="text-sm text-muted-foreground">Горячей премиум-шаурмой</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary text-center mb-12">Отзывы</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={review.name} 
                className="bg-secondary border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-primary/90 mb-4 italic leading-relaxed">"{review.text}"</p>
                  <div className="border-t border-primary/20 pt-4">
                    <p className="font-semibold text-primary">{review.name}</p>
                    <p className="text-sm text-primary/70">{review.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary border-t border-primary/20 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">👑</span>
                <h3 className="text-xl font-serif text-primary">Царская Шаурма</h3>
              </div>
              <p className="text-primary/80">
                Премиальная шаурма в Ростове-на-Дону
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Контакты</h4>
              <div className="space-y-2 text-primary/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (863) 000-00-00
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@tsarskaya.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Ростов-на-Дону
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary mb-4">Режим работы</h4>
              <p className="text-primary/80">Ежедневно<br />11:00 - 23:00</p>
            </div>
          </div>
          
          <div className="border-t border-primary/20 pt-8 text-center text-primary/70">
            <p>© 2024 Царская Шаурма. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;