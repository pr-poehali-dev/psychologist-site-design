import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const services = [
    {
      title: 'Индивидуальная консультация',
      description: 'Личная встреча для работы с вашими запросами',
      duration: '60 минут',
      price: 'от 3 500 ₽',
      icon: 'User'
    },
    {
      title: 'Семейная терапия',
      description: 'Работа с парами и семьями',
      duration: '90 минут',
      price: 'от 5 000 ₽',
      icon: 'Users'
    },
    {
      title: 'Онлайн консультация',
      description: 'Удобный формат для дистанционной работы',
      duration: '60 минут',
      price: 'от 3 000 ₽',
      icon: 'Video'
    },
    {
      title: 'Групповые сессии',
      description: 'Тематические группы поддержки',
      duration: '120 минут',
      price: 'от 2 000 ₽',
      icon: 'Users2'
    }
  ];

  const testimonials = [
    {
      name: 'Анна М.',
      text: 'Виктор помог мне разобраться с тревожностью. Профессиональный подход и теплая атмосфера на сессиях.',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      text: 'Работали над семейными отношениями. Результат превзошел ожидания. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена В.',
      text: 'Грамотный специалист. Помог выйти из сложного периода жизни.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', { ...formData, date, selectedTime });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Виктор Психолог</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">Запись</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Путь к гармонии начинается здесь
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональная психологическая помощь в комфортной и безопасной атмосфере
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                  Записаться на консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/cce3c60d-d452-4a2f-ac92-bc861cbdf527.png" 
                alt="Виктор - психолог"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl font-bold mb-12 text-center">Обо мне</h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Меня зовут Виктор, я практикующий психолог с более чем 10-летним опытом работы. 
                  Моя специализация — работа с тревожными расстройствами, депрессией и семейными конфликтами.
                </p>
                <p>
                  Я придерживаюсь интегративного подхода, сочетая методы когнитивно-поведенческой терапии, 
                  гештальт-терапии и системной семейной психотерапии.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <Icon name="Award" size={40} className="mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-foreground">10+ лет опыта</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <Icon name="Users" size={40} className="mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-foreground">500+ клиентов</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-xl">
                    <Icon name="GraduationCap" size={40} className="mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-foreground">Сертифицированный специалист</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Услуги</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Выберите подходящий формат работы</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/20">
                <CardHeader>
                  <Icon name={service.icon as any} size={48} className="text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      {service.duration}
                    </p>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Запись на консультацию</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Выберите удобное время и оставьте контакты</p>
          <Card className="border-none shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Выберите дату *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="CalendarDays" className="mr-2" size={16} />
                          {date ? format(date, 'PPP', { locale: ru }) : <span>Выберите дату</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ru}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите время *</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.slice(0, 6).map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className="text-sm"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                    <details className="mt-2">
                      <summary className="text-sm text-muted-foreground cursor-pointer hover:text-primary">Больше времени</summary>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        {timeSlots.slice(6).map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={selectedTime === time ? "default" : "outline"}
                            className="text-sm"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </details>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message"
                    placeholder="Расскажите кратко о запросе..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Отзывы клиентов</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Что говорят о моей работе</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Icon name="Phone" size={40} className="text-primary" />
              <h3 className="font-semibold text-lg">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="Mail" size={40} className="text-primary" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-muted-foreground">viktor@psycholog.ru</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Icon name="MapPin" size={40} className="text-primary" />
              <h3 className="font-semibold text-lg">Адрес</h3>
              <p className="text-muted-foreground">г. Москва, ул. Примерная, 10</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">© 2024 Виктор Психолог. Все права защищены.</p>
          <p className="text-xs mt-2 opacity-60">Конфиденциальность гарантирована</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
