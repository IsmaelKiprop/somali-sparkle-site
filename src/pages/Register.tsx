import { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SoomaalChat } from '@/components/SoomaalChat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { User, Mail, Phone, MapPin, Calendar, Shield, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const Register = () => {
  return (
    <LanguageProvider>
      <RegisterContent />
    </LanguageProvider>
  );
};

const RegisterContent = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    region: '',
    city: '',
    occupation: '',
    education: '',
    partyExperience: false,
    volunteer: false,
    donate: false,
    newsletter: false,
    agreeTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal as="div" className="mb-8 flex justify-center" variant="scale">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
              </ScrollReveal>
              <ScrollReveal as="h1" className="text-4xl font-bold text-secondary mb-4" variant="up" delayMs={80}>
                {language === 'so' ? 'Waad ku mahadsan tahay isdiiwaangelinta!' : 'Thank you for registering!'}
              </ScrollReveal>
              <ScrollReveal as="p" className="text-lg text-muted-foreground mb-8" variant="up" delayMs={140}>
                {language === 'so' 
                  ? 'Waxaan ku soo dhaweynayaa xisbiga Somali Youth Party. Waxaan ku soo diri doonaa warar xoga ah iyo wixii ku saabsan barnaamijyada.'
                  : 'Welcome to the Somali Youth Party. We will send you updates and information about our programs.'
                }
              </ScrollReveal>
              <ScrollReveal as="div" variant="up" delayMs={200}>
                <Button onClick={() => window.location.href = '/'} className="bg-primary hover:bg-primary/90">
                  {language === 'so' ? 'Ka Noqo Boga Hore' : 'Return to Home'}
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </main>
        <Footer />
        <SoomaalChat />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-24 relative overflow-hidden" style={{
        backgroundImage: 'url(/favicon.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-muted/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <ScrollReveal as="span" className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4" variant="up">
                {language === 'so' ? 'Ku Biir Xisbiga' : 'Join the Party'}
              </ScrollReveal>
              <ScrollReveal as="h1" className="font-outfit text-4xl md:text-5xl font-bold text-secondary mb-4" variant="up" delayMs={80}>
                {language === 'so' ? 'Isdiiwaangeli Xubinno' : 'Member Registration'}
              </ScrollReveal>
              <ScrollReveal as="p" className="text-lg text-muted-foreground max-w-2xl mx-auto" variant="up" delayMs={140}>
                {language === 'so' 
                  ? 'Ku biir tallaabadayada si aad u noqoto mid ka mid ah xubnaha ugu firfircoon ee xisbiga Somali Youth Party.'
                  : 'Join our movement to become one of the most active members of the Somali Youth Party.'
                }
              </ScrollReveal>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <ScrollReveal as={Card} variant="up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    {language === 'so' ? 'Macluumaadka Shakhsiga' : 'Personal Information'}
                  </CardTitle>
                  <CardDescription>
                    {language === 'so' 
                      ? 'Fadlan gali macluumaadkaaga saxda ah' 
                      : 'Please provide your accurate information'
                    }
                  </CardDescription>
                </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">{language === 'so' ? 'Magaca' : 'First Name'}</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">{language === 'so' ? 'Magaca Qoyska' : 'Last Name'}</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {language === 'so' ? 'Telefoon' : 'Phone'}
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {language === 'so' ? 'Dhashaad' : 'Date of Birth'}
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
              </ScrollReveal>

                {/* Location Information */}
                <ScrollReveal as={Card} variant="up" delayMs={80}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      {language === 'so' ? 'Goobta' : 'Location'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="region">{language === 'so' ? 'Gobol' : 'Region'}</Label>
                        <Select onValueChange={(value) => handleInputChange('region', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={language === 'so' ? 'Dooro gobolka' : 'Select region'} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="banadir">Banadir</SelectItem>
                            <SelectItem value="southwest">South West</SelectItem>
                            <SelectItem value="jubaland">Jubaland</SelectItem>
                            <SelectItem value="puntland">Puntland</SelectItem>
                            <SelectItem value="galmudug">Galmudug</SelectItem>
                            <SelectItem value="hirshabelle">Hirshabelle</SelectItem>
                            <SelectItem value="somaliland">Somaliland</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="city">{language === 'so' ? 'Magaalada' : 'City'}</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </ScrollReveal>

                {/* Professional Information */}
                <ScrollReveal as={Card} variant="up" delayMs={140}>
                  <CardHeader>
                    <CardTitle>{language === 'so' ? 'Macluumaadka Shaqada' : 'Professional Information'}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="occupation">{language === 'so' ? 'Shaqo' : 'Occupation'}</Label>
                        <Input
                          id="occupation"
                          value={formData.occupation}
                          onChange={(e) => handleInputChange('occupation', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="education">{language === 'so' ? 'Hormarka Waxbarashada' : 'Education Level'}</Label>
                        <Select onValueChange={(value) => handleInputChange('education', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder={language === 'so' ? 'Dooro heerka' : 'Select level'} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="primary">Dugsi Hoose | Primary</SelectItem>
                            <SelectItem value="secondary">Dugsi Sare | Secondary</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </ScrollReveal>

                {/* Party Involvement */}
                <ScrollReveal as={Card} variant="up" delayMs={200}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      {language === 'so' ? 'Qaybta Xisbiga' : 'Party Involvement'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="partyExperience"
                          checked={formData.partyExperience}
                          onCheckedChange={(checked) => handleInputChange('partyExperience', checked as boolean)}
                        />
                        <Label htmlFor="partyExperience">
                          {language === 'so' 
                            ? 'Waxay taariikhdo ahayd inaan xubin ka ahaa xisbi siyaasadeed' 
                            : 'I have been a member of a political party before'}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="volunteer"
                          checked={formData.volunteer}
                          onCheckedChange={(checked) => handleInputChange('volunteer', checked as boolean)}
                        />
                        <Label htmlFor="volunteer">
                          {language === 'so' ? 'Raba inaan ka qayb qaato shaqadiyaanka' : 'I want to volunteer'}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="donate"
                          checked={formData.donate}
                          onCheckedChange={(checked) => handleInputChange('donate', checked as boolean)}
                        />
                        <Label htmlFor="donate">
                          {language === 'so' ? 'Raba inaan taageero xorta ah' : 'I want to provide financial support'}
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                        />
                        <Label htmlFor="newsletter">
                          {language === 'so' ? 'Heli warar iyo wixii cusub' : 'Receive news and updates'}
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </ScrollReveal>

                {/* Terms and Conditions */}
                <ScrollReveal as={Card} variant="up" delayMs={260}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                        required
                      />
                      <Label htmlFor="agreeTerms" className="text-sm">
                        {language === 'so' 
                          ? 'Waan ogahay kana qanacsanahay sharciyada iyo shuruudaha xisbiga' 
                          : 'I understand and agree to the party\'s terms and conditions'}
                      </Label>
                    </div>
                  </CardContent>
                </ScrollReveal>

                {/* Submit Button */}
                <ScrollReveal as="div" className="text-center" variant="up" delayMs={320}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 text-lg bg-primary hover:bg-primary/90"
                  >
                    {isSubmitting 
                      ? (language === 'so' ? 'Soo diyaarinaayo...' : 'Processing...') 
                      : (language === 'so' ? 'Isdiiwaangeli Hadda' : 'Register Now')
                    }
                  </Button>
                </ScrollReveal>
              </form>
            </div>
          </div>
        </main>
        <Footer />
        <SoomaalChat />
      </div>
    );
};

export default Register;
