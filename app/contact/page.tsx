export default function Page() {
  return <div><section>
  <form action="mailto:info@karmeiquach.com" method="post" encType="text/plain">
    <div>
      <label>Name *</label>
      <input type="text" name="name"/>
    </div>

    <div>
      <label>Email address *</label>
      <input type="email" name="email"/>
    </div>

    <div>
      <label>Message *</label>
      <textarea name="message" rows={5}></textarea>
    </div>

    <button type="submit">Send Message</button>
  </form>
</section></div>
}
