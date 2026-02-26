import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#5A3E2B] text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div>
            <h3
              className="font-logo text-3xl text-orange-600"
              style={{ fontFamily: "Island Moments" }}
            >
              Chuks Kitchen
            </h3>
            <p className="text-sm text-gray-300">
              Bringing the authentic flavors of Nigerian home cooking to your
              table, with passion and care.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>Explore</li>
              <li>My Orders</li>
              <li>Account</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>+234 812 345 6789</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Tetteh Blvd, Lagos</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-10 pt-6 text-sm text-gray-400 text-center">
          © 2025 Chuks Kitchen. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
