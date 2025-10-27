import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const menuItems = [
    {
      name: 'Царская шаурма',
      price: 3000,
      priceText: '3 000 ₽',
      description: 'Отборное мясо премиум-класса, авторская заправка, микс свежих салатов. Идеальный баланс вкуса и качества',
      weight: '400г',
      category: 'shawarma'
    }
  ];

  const saladItems = [
    { name: 'Оливье', price: 350, priceText: '350 ₽', description: 'Классический салат с отварными овощами, яйцами и майонезом', weight: '250г' },
    { name: 'Салат Конструктор', price: 420, priceText: '420 ₽', description: 'Создай свой идеальный салат из наших ингредиентов', weight: '300г' },
    { name: 'Свекла с сыром и чесноком', price: 280, priceText: '280 ₽', description: 'Свежая свекла, сыр, чеснок, майонез', weight: '200г' },
    { name: 'Салат с ветчиной', price: 380, priceText: '380 ₽', description: 'Ветчина, свежие овощи, зелень, соус', weight: '250г' },
    { name: 'Цезарь', price: 450, priceText: '450 ₽', description: 'Куриное филе, салат романо, пармезан, соус цезарь, сухарики', weight: '280г' },
    { name: 'Крабовый салат', price: 320, priceText: '320 ₽', description: 'Крабовые палочки, кукуруза, яйца, рис, майонез', weight: '250г' },
    { name: 'Селедка под шубой', price: 340, priceText: '340 ₽', description: 'Сельдь, свекла, картофель, морковь, яйца, майонез', weight: '250г' },
    { name: 'Куриный с ананасами', price: 360, priceText: '360 ₽', description: 'Куриное филе, ананасы, кукуруза, сыр, майонез', weight: '250г' },
    { name: 'Салат из помидоров', price: 250, priceText: '250 ₽', description: 'Свежие помидоры, лук, зелень, масло', weight: '200г' },
    { name: 'Овощной', price: 280, priceText: '280 ₽', description: 'Микс свежих овощей, зелень, масло', weight: '250г' },
    { name: 'С курицей', price: 390, priceText: '390 ₽', description: 'Куриное филе, овощи, сыр, соус', weight: '280г' },
    { name: 'Витаминный', price: 320, priceText: '320 ₽', description: 'Капуста, морковь, яблоко, клюква', weight: '250г' },
    { name: 'Греческий', price: 420, priceText: '420 ₽', description: 'Фета, оливки, огурцы, помидоры, перец, масло', weight: '280г' },
    { name: 'Винегрет', price: 260, priceText: '260 ₽', description: 'Свекла, картофель, морковь, огурцы, горошек', weight: '250г' },
    { name: 'Овощной Светофор', price: 300, priceText: '300 ₽', description: 'Помидоры, огурцы, перец трех цветов, лук', weight: '250г' },
    { name: 'Селедочка по-домашнему', price: 350, priceText: '350 ₽', description: 'Сельдь, лук, масло, специи', weight: '200г' },
    { name: 'Капуста по-корейски', price: 220, priceText: '220 ₽', description: 'Капуста, морковь, специи, уксус', weight: '200г' },
    { name: 'Морковь по-корейски', price: 220, priceText: '220 ₽', description: 'Морковь, специи, чеснок, масло', weight: '200г' },
    { name: 'Баклажаны по-корейски', price: 280, priceText: '280 ₽', description: 'Баклажаны, морковь, специи, соус', weight: '200г' },
    { name: 'Огурцы по-корейски', price: 240, priceText: '240 ₽', description: 'Огурцы, морковь, специи, чеснок', weight: '200г' },
    { name: 'Спаржа по-корейски', price: 300, priceText: '300 ₽', description: 'Соевая спаржа, морковь, специи', weight: '200г' },
    { name: 'Свекла по-корейски', price: 240, priceText: '240 ₽', description: 'Свекла, морковь, чеснок, специи', weight: '200г' },
    { name: 'Папоротник по-корейски', price: 320, priceText: '320 ₽', description: 'Папоротник, морковь, лук, специи', weight: '200г' }
  ];

  const allMenuItems = [...menuItems, ...saladItems];

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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (itemName: string) => {
    setCart(prev => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1
    }));
  };

  const removeFromCart = (itemName: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemName] > 1) {
        newCart[itemName]--;
      } else {
        delete newCart[itemName];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemName, quantity]) => {
      const item = allMenuItems.find(i => i.name === itemName);
      return total + (item?.price || 0) * quantity;
    }, 0);
  };

  const handleOrderClick = (itemName: string) => {
    setSelectedItem(itemName);
    addToCart(itemName);
    setIsOrderDialogOpen(true);
  };

  const handleSubmitOrder = () => {
    alert(`Заказ оформлен!\n\nИмя: ${customerName}\nТелефон: ${customerPhone}\nАдрес: ${customerAddress}\n\nИтого: ${getTotalPrice().toLocaleString('ru-RU')} ₽`);
    setCart({});
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
    setIsOrderDialogOpen(false);
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
            {['Главная', 'Меню', 'Салаты', 'О нас', 'Доставка', 'Отзывы'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon" className="border-primary/30 text-primary">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-secondary border-l border-primary/20 w-80">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-serif text-primary flex items-center gap-2">
                    <span className="text-3xl">👑</span>
                    Меню
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {['Главная', 'Меню', 'Салаты', 'О нас', 'Доставка', 'Отзывы'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="w-full text-left text-lg text-primary hover:text-primary/80 transition-colors font-medium py-3 border-b border-primary/10"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            
            <Button 
              className="bg-primary text-secondary hover:bg-primary/90 hidden md:block"
              onClick={() => scrollToSection('меню')}
            >
              Заказать
            </Button>
          </div>
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
              <span className="text-primary">Царская</span><br />
              шаурма
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
                    <span className="text-2xl font-bold text-primary">{item.priceText}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{item.weight}</span>
                    <Button 
                      className="bg-primary text-secondary hover:bg-primary/90"
                      onClick={() => handleOrderClick(item.name)}
                    >
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="салаты" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary text-center mb-4">Салаты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свежие салаты и закуски по-корейски</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {saladItems.map((item, index) => (
              <Card 
                key={item.name} 
                className="bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif text-secondary">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">{item.priceText}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{item.weight}</span>
                    <Button 
                      size="sm"
                      className="bg-primary text-secondary hover:bg-primary/90"
                      onClick={() => handleOrderClick(item.name)}
                    >
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

      <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-background border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-3xl font-serif text-secondary">Оформление заказа</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <h3 className="text-xl font-serif text-secondary">Ваш заказ:</h3>
              {Object.entries(cart).map(([itemName, quantity]) => {
                const item = allMenuItems.find(i => i.name === itemName);
                return (
                  <div key={itemName} className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                    <div className="flex-1">
                      <p className="font-semibold text-secondary">{itemName}</p>
                      <p className="text-sm text-muted-foreground">{item?.priceText} × {quantity}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeFromCart(itemName)}
                        className="h-8 w-8 p-0 border-primary/30"
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="text-lg font-semibold text-secondary w-6 text-center">{quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCart(itemName)}
                        className="h-8 w-8 p-0 border-primary/30"
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-4 border-t border-primary/20">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-serif text-secondary">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
                </div>
                {getTotalPrice() >= 1000 && (
                  <p className="text-sm text-primary/70 mt-2">✨ Бесплатная доставка!</p>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-primary/20">
              <h3 className="text-xl font-serif text-secondary">Контактные данные:</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-secondary">Имя</Label>
                <Input
                  id="name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ваше имя"
                  className="border-primary/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-secondary">Телефон</Label>
                <Input
                  id="phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="border-primary/30"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address" className="text-secondary">Адрес доставки</Label>
                <Input
                  id="address"
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Улица, дом, квартира"
                  className="border-primary/30"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              onClick={handleSubmitOrder}
              disabled={!customerName || !customerPhone || !customerAddress || Object.keys(cart).length === 0}
              className="w-full bg-primary text-secondary hover:bg-primary/90 text-lg py-6"
            >
              Оформить заказ на {getTotalPrice().toLocaleString('ru-RU')} ₽
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;