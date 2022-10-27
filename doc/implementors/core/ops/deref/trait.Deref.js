(function() {var implementors = {};
implementors["dfqueue"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"dfqueue/struct.QueuedData.html\" title=\"struct dfqueue::QueuedData\">QueuedData</a>&lt;T&gt;","synthetic":false,"types":["dfqueue::QueuedData"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"dfqueue/struct.PeekedData.html\" title=\"struct dfqueue::PeekedData\">PeekedData</a>&lt;T&gt;","synthetic":false,"types":["dfqueue::PeekedData"]}];
implementors["frame_allocator"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"frame_allocator/struct.PhysicalMemoryRegion.html\" title=\"struct frame_allocator::PhysicalMemoryRegion\">PhysicalMemoryRegion</a>","synthetic":false,"types":["frame_allocator::PhysicalMemoryRegion"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"frame_allocator/struct.AllocatedFrames.html\" title=\"struct frame_allocator::AllocatedFrames\">AllocatedFrames</a>","synthetic":false,"types":["frame_allocator::AllocatedFrames"]},{"text":"impl&lt;'f&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"frame_allocator/struct.AllocatedFrame.html\" title=\"struct frame_allocator::AllocatedFrame\">AllocatedFrame</a>&lt;'f&gt;","synthetic":false,"types":["frame_allocator::AllocatedFrame"]}];
implementors["io"] = [{"text":"impl&lt;IO&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"io/struct.ReaderWriter.html\" title=\"struct io::ReaderWriter\">ReaderWriter</a>&lt;IO&gt;","synthetic":false,"types":["io::ReaderWriter"]},{"text":"impl&lt;'io, IO, L, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"io/struct.LockableIo.html\" title=\"struct io::LockableIo\">LockableIo</a>&lt;'io, IO, L, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;IO: 'io + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: for&lt;'a&gt; <a class=\"trait\" href=\"lockable/trait.Lockable.html\" title=\"trait lockable::Lockable\">Lockable</a>&lt;'a, IO&gt; + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;L&gt;,&nbsp;</span>","synthetic":false,"types":["io::LockableIo"]}];
implementors["memory"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"memory/struct.MappedPages.html\" title=\"struct memory::MappedPages\">MappedPages</a>","synthetic":false,"types":["memory::paging::mapper::MappedPages"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"memory/struct.PageTable.html\" title=\"struct memory::PageTable\">PageTable</a>","synthetic":false,"types":["memory::paging::PageTable"]}];
implementors["memory_structs"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"memory_structs/struct.PageRange.html\" title=\"struct memory_structs::PageRange\">PageRange</a>","synthetic":false,"types":["memory_structs::PageRange"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"memory_structs/struct.FrameRange.html\" title=\"struct memory_structs::FrameRange\">FrameRange</a>","synthetic":false,"types":["memory_structs::FrameRange"]}];
implementors["mod_mgmt"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mod_mgmt/struct.NamespaceDir.html\" title=\"struct mod_mgmt::NamespaceDir\">NamespaceDir</a>","synthetic":false,"types":["mod_mgmt::NamespaceDir"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mod_mgmt/struct.AppCrateRef.html\" title=\"struct mod_mgmt::AppCrateRef\">AppCrateRef</a>","synthetic":false,"types":["mod_mgmt::AppCrateRef"]}];
implementors["mutex_preemption"] = [{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mutex_preemption/struct.MutexPreemptGuard.html\" title=\"struct mutex_preemption::MutexPreemptGuard\">MutexPreemptGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["mutex_preemption::mutex_preempt::MutexPreemptGuard"]},{"text":"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mutex_preemption/struct.RwLockPreemptReadGuard.html\" title=\"struct mutex_preemption::RwLockPreemptReadGuard\">RwLockPreemptReadGuard</a>&lt;'rwlock, T&gt;","synthetic":false,"types":["mutex_preemption::rwlock_preempt::RwLockPreemptReadGuard"]},{"text":"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mutex_preemption/struct.RwLockPreemptWriteGuard.html\" title=\"struct mutex_preemption::RwLockPreemptWriteGuard\">RwLockPreemptWriteGuard</a>&lt;'rwlock, T&gt;","synthetic":false,"types":["mutex_preemption::rwlock_preempt::RwLockPreemptWriteGuard"]}];
implementors["mutex_sleep"] = [{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mutex_sleep/struct.MutexSleepGuard.html\" title=\"struct mutex_sleep::MutexSleepGuard\">MutexSleepGuard</a>&lt;'a, T&gt;","synthetic":false,"types":["mutex_sleep::mutex::MutexSleepGuard"]},{"text":"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mutex_sleep/struct.RwLockSleepReadGuard.html\" title=\"struct mutex_sleep::RwLockSleepReadGuard\">RwLockSleepReadGuard</a>&lt;'rwlock, T&gt;","synthetic":false,"types":["mutex_sleep::rwlock::RwLockSleepReadGuard"]},{"text":"impl&lt;'rwlock, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mutex_sleep/struct.RwLockSleepWriteGuard.html\" title=\"struct mutex_sleep::RwLockSleepWriteGuard\">RwLockSleepWriteGuard</a>&lt;'rwlock, T&gt;","synthetic":false,"types":["mutex_sleep::rwlock::RwLockSleepWriteGuard"]}];
implementors["nic_buffers"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"nic_buffers/struct.TransmitBuffer.html\" title=\"struct nic_buffers::TransmitBuffer\">TransmitBuffer</a>","synthetic":false,"types":["nic_buffers::TransmitBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"nic_buffers/struct.ReceiveBuffer.html\" title=\"struct nic_buffers::ReceiveBuffer\">ReceiveBuffer</a>","synthetic":false,"types":["nic_buffers::ReceiveBuffer"]}];
implementors["no_drop"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"no_drop/struct.NoDrop.html\" title=\"struct no_drop::NoDrop\">NoDrop</a>&lt;T&gt;","synthetic":false,"types":["no_drop::NoDrop"]}];
implementors["page_allocator"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"page_allocator/struct.AllocatedPages.html\" title=\"struct page_allocator::AllocatedPages\">AllocatedPages</a>","synthetic":false,"types":["page_allocator::AllocatedPages"]}];
implementors["page_table_entry"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"page_table_entry/struct.UnmappedFrames.html\" title=\"struct page_table_entry::UnmappedFrames\">UnmappedFrames</a>","synthetic":false,"types":["page_table_entry::UnmappedFrames"]}];
implementors["path"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"path/struct.Path.html\" title=\"struct path::Path\">Path</a>","synthetic":false,"types":["path::Path"]}];
implementors["pci"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"pci/struct.PciDevice.html\" title=\"struct pci::PciDevice\">PciDevice</a>","synthetic":false,"types":["pci::PciDevice"]}];
implementors["root"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"root/struct.ROOT.html\" title=\"struct root::ROOT\">ROOT</a>","synthetic":false,"types":["root::ROOT"]}];
implementors["runqueue_priority"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"runqueue_priority/struct.PriorityTaskRef.html\" title=\"struct runqueue_priority::PriorityTaskRef\">PriorityTaskRef</a>","synthetic":false,"types":["runqueue_priority::PriorityTaskRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"runqueue_priority/struct.RunQueue.html\" title=\"struct runqueue_priority::RunQueue\">RunQueue</a>","synthetic":false,"types":["runqueue_priority::RunQueue"]}];
implementors["runqueue_realtime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"runqueue_realtime/struct.RealtimeTaskRef.html\" title=\"struct runqueue_realtime::RealtimeTaskRef\">RealtimeTaskRef</a>","synthetic":false,"types":["runqueue_realtime::RealtimeTaskRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"runqueue_realtime/struct.RunQueue.html\" title=\"struct runqueue_realtime::RunQueue\">RunQueue</a>","synthetic":false,"types":["runqueue_realtime::RunQueue"]}];
implementors["runqueue_round_robin"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"runqueue_round_robin/struct.RoundRobinTaskRef.html\" title=\"struct runqueue_round_robin::RoundRobinTaskRef\">RoundRobinTaskRef</a>","synthetic":false,"types":["runqueue_round_robin::RoundRobinTaskRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"runqueue_round_robin/struct.RunQueue.html\" title=\"struct runqueue_round_robin::RunQueue\">RunQueue</a>","synthetic":false,"types":["runqueue_round_robin::RunQueue"]}];
implementors["serial_port"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"serial_port/struct.SerialPort.html\" title=\"struct serial_port::SerialPort\">SerialPort</a>","synthetic":false,"types":["serial_port::SerialPort"]}];
implementors["spawn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"spawn/struct.BootstrapTaskRef.html\" title=\"struct spawn::BootstrapTaskRef\">BootstrapTaskRef</a>","synthetic":false,"types":["spawn::BootstrapTaskRef"]}];
implementors["stack"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"stack/struct.Stack.html\" title=\"struct stack::Stack\">Stack</a>","synthetic":false,"types":["stack::Stack"]}];
implementors["stdio"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"stdio/struct.KeyEventReadGuard.html\" title=\"struct stdio::KeyEventReadGuard\">KeyEventReadGuard</a>","synthetic":false,"types":["stdio::KeyEventReadGuard"]}];
implementors["task"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"task/struct.JoinableTaskRef.html\" title=\"struct task::JoinableTaskRef\">JoinableTaskRef</a>","synthetic":false,"types":["task::JoinableTaskRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"task/struct.TaskRef.html\" title=\"struct task::TaskRef\">TaskRef</a>","synthetic":false,"types":["task::TaskRef"]}];
implementors["text_terminal"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"text_terminal/struct.Line.html\" title=\"struct text_terminal::Line\">Line</a>","synthetic":false,"types":["text_terminal::Line"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"text_terminal/struct.ScrollbackBuffer.html\" title=\"struct text_terminal::ScrollbackBuffer\">ScrollbackBuffer</a>","synthetic":false,"types":["text_terminal::ScrollbackBuffer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"text_terminal/struct.Unit.html\" title=\"struct text_terminal::Unit\">Unit</a>","synthetic":false,"types":["text_terminal::Unit"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()