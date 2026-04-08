# EventItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | The Hotel code which the item belongs to. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemClassId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemClassCode** | Pointer to **string** | The Item Class Code which the item belongs to. | [optional] 
**ItemClassDescription** | Pointer to **string** | The Description of the Item Class. | [optional] 
**ItemName** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**ItemDescription** | Pointer to **string** | The Description of the Item. | [optional] 
**ItemCode** | Pointer to **string** | The Article Number of the Item. | [optional] 
**RevenueType** | Pointer to **string** | The Revenue Type of the Item. | [optional] 
**RevenueTypeEditable** | Pointer to **bool** | If true, the revenue could be changed. | [optional] 
**ExternalOrder** | Pointer to **bool** | Flag to define if the inventory item can be ordered externally when the item is marked as critical. | [optional] 
**Print** | Pointer to **bool** | The Revenue Type of the Item. | [optional] 
**SellInfo** | Pointer to [**EventItemTypeSellInfo**](EventItemTypeSellInfo.md) |  | [optional] 
**SetupTime** | Pointer to **float32** | Setup Time of the Item in minutes. | [optional] 
**SetdownTime** | Pointer to **float32** | Setdown Time of the Item in minutes. | [optional] 
**TraceText** | Pointer to **string** | The Trace Text of the Item. | [optional] 
**ItemPool** | Pointer to **string** | The Item Pool description of the Item. | [optional] 
**DisplaySequence** | Pointer to **float32** | The display sequence of the Item. | [optional] 
**EventTypes** | Pointer to **[]string** |  | [optional] 
**Departments** | Pointer to **[]string** |  | [optional] 
**Attributes** | Pointer to [**[]ItemAttributeType**](ItemAttributeType.md) | List of Item Attributes. | [optional] 
**Rates** | Pointer to [**[]ItemRateType**](ItemRateType.md) | List of Item Rates. | [optional] 
**Vendors** | Pointer to [**[]ItemVendorType**](ItemVendorType.md) | List of Item Vendors. | [optional] 
**ResourceNotes** | Pointer to [**[]EventResourceNoteType**](EventResourceNoteType.md) | Contains event resource comment information. | [optional] 
**ItemClassDisplaySequence** | Pointer to **float32** | Display sequence of Item Class. | [optional] 
**UsedForEvents** | Pointer to **bool** | If true, the item is used for events. | [optional] 
**UsedForReservation** | Pointer to **bool** | If true, the item is used for reservation. | [optional] 
**ItemFromTemplate** | Pointer to **bool** | Indicates whether Item is from a Template or not. | [optional] 
**Quantity** | Pointer to **float32** | The quantity of this item required by the event. | [optional] 
**AttributeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemRateId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Price** | Pointer to **float32** | For Custom rate codes, this indicates the item price. | [optional] 
**Discount** | Pointer to **float32** | Discount to be applied to the price. | [optional] 
**PriceCode** | Pointer to **string** | Price Code to be selected from the list of configured codes available for this item | [optional] 
**InternalQuantity** | Pointer to **float32** | Internal Quantity can be all or part of the total quantity | [optional] 
**ExternalQuantity** | Pointer to **float32** | External Quantity can be all or part of the total quantity of this item needs to be booked through external sources, this field shows the number booked | [optional] 
**ActualInternalQuantity** | Pointer to **float32** | Actual quantity of the item booked from internal resources | [optional] 
**ActualExternalQuantity** | Pointer to **float32** | Actual quantity of the item booked through external sources with corresponding cost | [optional] 
**InternalCostPerUnit** | Pointer to **float32** | Shows the internal cost of the item.If a cost has been configured for the item it will be automatically populated into this field | [optional] 
**ExternalCostPerUnit** | Pointer to **float32** | Shows the price the external source charges for the item | [optional] 
**ActualInternalCostPerUnit** | Pointer to **float32** | Shows the internal cost of the item. If a booked internal cost has been entered for the item, it will be automatically populated into this field | [optional] 
**ActualExternalCostPerUnit** | Pointer to **float32** | Shows the external cost of the item. If a booked external cost has been entered for the item, it will be automatically populated into this field | [optional] 
**Order** | Pointer to **int32** | Order in which the item is displayed and printed within the non-Food and Beverage item group and its Item Class.Defaults to the sequence number in which the item was attached to the Event. | [optional] 
**ActualQuantity** | Pointer to **float32** | The total actual quantity of the item on event actualization. | [optional] 
**PackageId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**IsNameCustom** | Pointer to **bool** | Flag to check if the Event Item Name is a Custom Name | [optional] 
**IsExcludeNonDeduct** | Pointer to **bool** | Flag to check if the Event Item is ExcludeNonDeduct | [optional] 
**VendorPrice** | Pointer to **float32** | This indicates the vendor price. | [optional] 
**EventStartDate** | Pointer to **string** | The starting value of the time span. | [optional] 
**EventEndDate** | Pointer to **string** | The ending value of the time span. | [optional] 

## Methods

### NewEventItemType

`func NewEventItemType() *EventItemType`

NewEventItemType instantiates a new EventItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventItemTypeWithDefaults

`func NewEventItemTypeWithDefaults() *EventItemType`

NewEventItemTypeWithDefaults instantiates a new EventItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *EventItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemId

`func (o *EventItemType) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *EventItemType) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *EventItemType) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *EventItemType) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetItemClassId

`func (o *EventItemType) GetItemClassId() UniqueIDType`

GetItemClassId returns the ItemClassId field if non-nil, zero value otherwise.

### GetItemClassIdOk

`func (o *EventItemType) GetItemClassIdOk() (*UniqueIDType, bool)`

GetItemClassIdOk returns a tuple with the ItemClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassId

`func (o *EventItemType) SetItemClassId(v UniqueIDType)`

SetItemClassId sets ItemClassId field to given value.

### HasItemClassId

`func (o *EventItemType) HasItemClassId() bool`

HasItemClassId returns a boolean if a field has been set.

### GetItemClassCode

`func (o *EventItemType) GetItemClassCode() string`

GetItemClassCode returns the ItemClassCode field if non-nil, zero value otherwise.

### GetItemClassCodeOk

`func (o *EventItemType) GetItemClassCodeOk() (*string, bool)`

GetItemClassCodeOk returns a tuple with the ItemClassCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassCode

`func (o *EventItemType) SetItemClassCode(v string)`

SetItemClassCode sets ItemClassCode field to given value.

### HasItemClassCode

`func (o *EventItemType) HasItemClassCode() bool`

HasItemClassCode returns a boolean if a field has been set.

### GetItemClassDescription

`func (o *EventItemType) GetItemClassDescription() string`

GetItemClassDescription returns the ItemClassDescription field if non-nil, zero value otherwise.

### GetItemClassDescriptionOk

`func (o *EventItemType) GetItemClassDescriptionOk() (*string, bool)`

GetItemClassDescriptionOk returns a tuple with the ItemClassDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassDescription

`func (o *EventItemType) SetItemClassDescription(v string)`

SetItemClassDescription sets ItemClassDescription field to given value.

### HasItemClassDescription

`func (o *EventItemType) HasItemClassDescription() bool`

HasItemClassDescription returns a boolean if a field has been set.

### GetItemName

`func (o *EventItemType) GetItemName() TranslationTextType200`

GetItemName returns the ItemName field if non-nil, zero value otherwise.

### GetItemNameOk

`func (o *EventItemType) GetItemNameOk() (*TranslationTextType200, bool)`

GetItemNameOk returns a tuple with the ItemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemName

`func (o *EventItemType) SetItemName(v TranslationTextType200)`

SetItemName sets ItemName field to given value.

### HasItemName

`func (o *EventItemType) HasItemName() bool`

HasItemName returns a boolean if a field has been set.

### GetItemDescription

`func (o *EventItemType) GetItemDescription() string`

GetItemDescription returns the ItemDescription field if non-nil, zero value otherwise.

### GetItemDescriptionOk

`func (o *EventItemType) GetItemDescriptionOk() (*string, bool)`

GetItemDescriptionOk returns a tuple with the ItemDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemDescription

`func (o *EventItemType) SetItemDescription(v string)`

SetItemDescription sets ItemDescription field to given value.

### HasItemDescription

`func (o *EventItemType) HasItemDescription() bool`

HasItemDescription returns a boolean if a field has been set.

### GetItemCode

`func (o *EventItemType) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *EventItemType) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *EventItemType) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *EventItemType) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetRevenueType

`func (o *EventItemType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *EventItemType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *EventItemType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *EventItemType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetRevenueTypeEditable

`func (o *EventItemType) GetRevenueTypeEditable() bool`

GetRevenueTypeEditable returns the RevenueTypeEditable field if non-nil, zero value otherwise.

### GetRevenueTypeEditableOk

`func (o *EventItemType) GetRevenueTypeEditableOk() (*bool, bool)`

GetRevenueTypeEditableOk returns a tuple with the RevenueTypeEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeEditable

`func (o *EventItemType) SetRevenueTypeEditable(v bool)`

SetRevenueTypeEditable sets RevenueTypeEditable field to given value.

### HasRevenueTypeEditable

`func (o *EventItemType) HasRevenueTypeEditable() bool`

HasRevenueTypeEditable returns a boolean if a field has been set.

### GetExternalOrder

`func (o *EventItemType) GetExternalOrder() bool`

GetExternalOrder returns the ExternalOrder field if non-nil, zero value otherwise.

### GetExternalOrderOk

`func (o *EventItemType) GetExternalOrderOk() (*bool, bool)`

GetExternalOrderOk returns a tuple with the ExternalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrder

`func (o *EventItemType) SetExternalOrder(v bool)`

SetExternalOrder sets ExternalOrder field to given value.

### HasExternalOrder

`func (o *EventItemType) HasExternalOrder() bool`

HasExternalOrder returns a boolean if a field has been set.

### GetPrint

`func (o *EventItemType) GetPrint() bool`

GetPrint returns the Print field if non-nil, zero value otherwise.

### GetPrintOk

`func (o *EventItemType) GetPrintOk() (*bool, bool)`

GetPrintOk returns a tuple with the Print field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrint

`func (o *EventItemType) SetPrint(v bool)`

SetPrint sets Print field to given value.

### HasPrint

`func (o *EventItemType) HasPrint() bool`

HasPrint returns a boolean if a field has been set.

### GetSellInfo

`func (o *EventItemType) GetSellInfo() EventItemTypeSellInfo`

GetSellInfo returns the SellInfo field if non-nil, zero value otherwise.

### GetSellInfoOk

`func (o *EventItemType) GetSellInfoOk() (*EventItemTypeSellInfo, bool)`

GetSellInfoOk returns a tuple with the SellInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellInfo

`func (o *EventItemType) SetSellInfo(v EventItemTypeSellInfo)`

SetSellInfo sets SellInfo field to given value.

### HasSellInfo

`func (o *EventItemType) HasSellInfo() bool`

HasSellInfo returns a boolean if a field has been set.

### GetSetupTime

`func (o *EventItemType) GetSetupTime() float32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *EventItemType) GetSetupTimeOk() (*float32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *EventItemType) SetSetupTime(v float32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *EventItemType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetSetdownTime

`func (o *EventItemType) GetSetdownTime() float32`

GetSetdownTime returns the SetdownTime field if non-nil, zero value otherwise.

### GetSetdownTimeOk

`func (o *EventItemType) GetSetdownTimeOk() (*float32, bool)`

GetSetdownTimeOk returns a tuple with the SetdownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetdownTime

`func (o *EventItemType) SetSetdownTime(v float32)`

SetSetdownTime sets SetdownTime field to given value.

### HasSetdownTime

`func (o *EventItemType) HasSetdownTime() bool`

HasSetdownTime returns a boolean if a field has been set.

### GetTraceText

`func (o *EventItemType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *EventItemType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *EventItemType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *EventItemType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetItemPool

`func (o *EventItemType) GetItemPool() string`

GetItemPool returns the ItemPool field if non-nil, zero value otherwise.

### GetItemPoolOk

`func (o *EventItemType) GetItemPoolOk() (*string, bool)`

GetItemPoolOk returns a tuple with the ItemPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemPool

`func (o *EventItemType) SetItemPool(v string)`

SetItemPool sets ItemPool field to given value.

### HasItemPool

`func (o *EventItemType) HasItemPool() bool`

HasItemPool returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *EventItemType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *EventItemType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *EventItemType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *EventItemType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetEventTypes

`func (o *EventItemType) GetEventTypes() []string`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *EventItemType) GetEventTypesOk() (*[]string, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *EventItemType) SetEventTypes(v []string)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *EventItemType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetDepartments

`func (o *EventItemType) GetDepartments() []string`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *EventItemType) GetDepartmentsOk() (*[]string, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *EventItemType) SetDepartments(v []string)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *EventItemType) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetAttributes

`func (o *EventItemType) GetAttributes() []ItemAttributeType`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *EventItemType) GetAttributesOk() (*[]ItemAttributeType, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *EventItemType) SetAttributes(v []ItemAttributeType)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *EventItemType) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetRates

`func (o *EventItemType) GetRates() []ItemRateType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *EventItemType) GetRatesOk() (*[]ItemRateType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *EventItemType) SetRates(v []ItemRateType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *EventItemType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetVendors

`func (o *EventItemType) GetVendors() []ItemVendorType`

GetVendors returns the Vendors field if non-nil, zero value otherwise.

### GetVendorsOk

`func (o *EventItemType) GetVendorsOk() (*[]ItemVendorType, bool)`

GetVendorsOk returns a tuple with the Vendors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendors

`func (o *EventItemType) SetVendors(v []ItemVendorType)`

SetVendors sets Vendors field to given value.

### HasVendors

`func (o *EventItemType) HasVendors() bool`

HasVendors returns a boolean if a field has been set.

### GetResourceNotes

`func (o *EventItemType) GetResourceNotes() []EventResourceNoteType`

GetResourceNotes returns the ResourceNotes field if non-nil, zero value otherwise.

### GetResourceNotesOk

`func (o *EventItemType) GetResourceNotesOk() (*[]EventResourceNoteType, bool)`

GetResourceNotesOk returns a tuple with the ResourceNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNotes

`func (o *EventItemType) SetResourceNotes(v []EventResourceNoteType)`

SetResourceNotes sets ResourceNotes field to given value.

### HasResourceNotes

`func (o *EventItemType) HasResourceNotes() bool`

HasResourceNotes returns a boolean if a field has been set.

### GetItemClassDisplaySequence

`func (o *EventItemType) GetItemClassDisplaySequence() float32`

GetItemClassDisplaySequence returns the ItemClassDisplaySequence field if non-nil, zero value otherwise.

### GetItemClassDisplaySequenceOk

`func (o *EventItemType) GetItemClassDisplaySequenceOk() (*float32, bool)`

GetItemClassDisplaySequenceOk returns a tuple with the ItemClassDisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassDisplaySequence

`func (o *EventItemType) SetItemClassDisplaySequence(v float32)`

SetItemClassDisplaySequence sets ItemClassDisplaySequence field to given value.

### HasItemClassDisplaySequence

`func (o *EventItemType) HasItemClassDisplaySequence() bool`

HasItemClassDisplaySequence returns a boolean if a field has been set.

### GetUsedForEvents

`func (o *EventItemType) GetUsedForEvents() bool`

GetUsedForEvents returns the UsedForEvents field if non-nil, zero value otherwise.

### GetUsedForEventsOk

`func (o *EventItemType) GetUsedForEventsOk() (*bool, bool)`

GetUsedForEventsOk returns a tuple with the UsedForEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedForEvents

`func (o *EventItemType) SetUsedForEvents(v bool)`

SetUsedForEvents sets UsedForEvents field to given value.

### HasUsedForEvents

`func (o *EventItemType) HasUsedForEvents() bool`

HasUsedForEvents returns a boolean if a field has been set.

### GetUsedForReservation

`func (o *EventItemType) GetUsedForReservation() bool`

GetUsedForReservation returns the UsedForReservation field if non-nil, zero value otherwise.

### GetUsedForReservationOk

`func (o *EventItemType) GetUsedForReservationOk() (*bool, bool)`

GetUsedForReservationOk returns a tuple with the UsedForReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedForReservation

`func (o *EventItemType) SetUsedForReservation(v bool)`

SetUsedForReservation sets UsedForReservation field to given value.

### HasUsedForReservation

`func (o *EventItemType) HasUsedForReservation() bool`

HasUsedForReservation returns a boolean if a field has been set.

### GetItemFromTemplate

`func (o *EventItemType) GetItemFromTemplate() bool`

GetItemFromTemplate returns the ItemFromTemplate field if non-nil, zero value otherwise.

### GetItemFromTemplateOk

`func (o *EventItemType) GetItemFromTemplateOk() (*bool, bool)`

GetItemFromTemplateOk returns a tuple with the ItemFromTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemFromTemplate

`func (o *EventItemType) SetItemFromTemplate(v bool)`

SetItemFromTemplate sets ItemFromTemplate field to given value.

### HasItemFromTemplate

`func (o *EventItemType) HasItemFromTemplate() bool`

HasItemFromTemplate returns a boolean if a field has been set.

### GetQuantity

`func (o *EventItemType) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *EventItemType) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *EventItemType) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *EventItemType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetAttributeId

`func (o *EventItemType) GetAttributeId() UniqueIDType`

GetAttributeId returns the AttributeId field if non-nil, zero value otherwise.

### GetAttributeIdOk

`func (o *EventItemType) GetAttributeIdOk() (*UniqueIDType, bool)`

GetAttributeIdOk returns a tuple with the AttributeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeId

`func (o *EventItemType) SetAttributeId(v UniqueIDType)`

SetAttributeId sets AttributeId field to given value.

### HasAttributeId

`func (o *EventItemType) HasAttributeId() bool`

HasAttributeId returns a boolean if a field has been set.

### GetItemRateId

`func (o *EventItemType) GetItemRateId() UniqueIDType`

GetItemRateId returns the ItemRateId field if non-nil, zero value otherwise.

### GetItemRateIdOk

`func (o *EventItemType) GetItemRateIdOk() (*UniqueIDType, bool)`

GetItemRateIdOk returns a tuple with the ItemRateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemRateId

`func (o *EventItemType) SetItemRateId(v UniqueIDType)`

SetItemRateId sets ItemRateId field to given value.

### HasItemRateId

`func (o *EventItemType) HasItemRateId() bool`

HasItemRateId returns a boolean if a field has been set.

### GetPrice

`func (o *EventItemType) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *EventItemType) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *EventItemType) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *EventItemType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetDiscount

`func (o *EventItemType) GetDiscount() float32`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *EventItemType) GetDiscountOk() (*float32, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *EventItemType) SetDiscount(v float32)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *EventItemType) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### GetPriceCode

`func (o *EventItemType) GetPriceCode() string`

GetPriceCode returns the PriceCode field if non-nil, zero value otherwise.

### GetPriceCodeOk

`func (o *EventItemType) GetPriceCodeOk() (*string, bool)`

GetPriceCodeOk returns a tuple with the PriceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceCode

`func (o *EventItemType) SetPriceCode(v string)`

SetPriceCode sets PriceCode field to given value.

### HasPriceCode

`func (o *EventItemType) HasPriceCode() bool`

HasPriceCode returns a boolean if a field has been set.

### GetInternalQuantity

`func (o *EventItemType) GetInternalQuantity() float32`

GetInternalQuantity returns the InternalQuantity field if non-nil, zero value otherwise.

### GetInternalQuantityOk

`func (o *EventItemType) GetInternalQuantityOk() (*float32, bool)`

GetInternalQuantityOk returns a tuple with the InternalQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalQuantity

`func (o *EventItemType) SetInternalQuantity(v float32)`

SetInternalQuantity sets InternalQuantity field to given value.

### HasInternalQuantity

`func (o *EventItemType) HasInternalQuantity() bool`

HasInternalQuantity returns a boolean if a field has been set.

### GetExternalQuantity

`func (o *EventItemType) GetExternalQuantity() float32`

GetExternalQuantity returns the ExternalQuantity field if non-nil, zero value otherwise.

### GetExternalQuantityOk

`func (o *EventItemType) GetExternalQuantityOk() (*float32, bool)`

GetExternalQuantityOk returns a tuple with the ExternalQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalQuantity

`func (o *EventItemType) SetExternalQuantity(v float32)`

SetExternalQuantity sets ExternalQuantity field to given value.

### HasExternalQuantity

`func (o *EventItemType) HasExternalQuantity() bool`

HasExternalQuantity returns a boolean if a field has been set.

### GetActualInternalQuantity

`func (o *EventItemType) GetActualInternalQuantity() float32`

GetActualInternalQuantity returns the ActualInternalQuantity field if non-nil, zero value otherwise.

### GetActualInternalQuantityOk

`func (o *EventItemType) GetActualInternalQuantityOk() (*float32, bool)`

GetActualInternalQuantityOk returns a tuple with the ActualInternalQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualInternalQuantity

`func (o *EventItemType) SetActualInternalQuantity(v float32)`

SetActualInternalQuantity sets ActualInternalQuantity field to given value.

### HasActualInternalQuantity

`func (o *EventItemType) HasActualInternalQuantity() bool`

HasActualInternalQuantity returns a boolean if a field has been set.

### GetActualExternalQuantity

`func (o *EventItemType) GetActualExternalQuantity() float32`

GetActualExternalQuantity returns the ActualExternalQuantity field if non-nil, zero value otherwise.

### GetActualExternalQuantityOk

`func (o *EventItemType) GetActualExternalQuantityOk() (*float32, bool)`

GetActualExternalQuantityOk returns a tuple with the ActualExternalQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualExternalQuantity

`func (o *EventItemType) SetActualExternalQuantity(v float32)`

SetActualExternalQuantity sets ActualExternalQuantity field to given value.

### HasActualExternalQuantity

`func (o *EventItemType) HasActualExternalQuantity() bool`

HasActualExternalQuantity returns a boolean if a field has been set.

### GetInternalCostPerUnit

`func (o *EventItemType) GetInternalCostPerUnit() float32`

GetInternalCostPerUnit returns the InternalCostPerUnit field if non-nil, zero value otherwise.

### GetInternalCostPerUnitOk

`func (o *EventItemType) GetInternalCostPerUnitOk() (*float32, bool)`

GetInternalCostPerUnitOk returns a tuple with the InternalCostPerUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalCostPerUnit

`func (o *EventItemType) SetInternalCostPerUnit(v float32)`

SetInternalCostPerUnit sets InternalCostPerUnit field to given value.

### HasInternalCostPerUnit

`func (o *EventItemType) HasInternalCostPerUnit() bool`

HasInternalCostPerUnit returns a boolean if a field has been set.

### GetExternalCostPerUnit

`func (o *EventItemType) GetExternalCostPerUnit() float32`

GetExternalCostPerUnit returns the ExternalCostPerUnit field if non-nil, zero value otherwise.

### GetExternalCostPerUnitOk

`func (o *EventItemType) GetExternalCostPerUnitOk() (*float32, bool)`

GetExternalCostPerUnitOk returns a tuple with the ExternalCostPerUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalCostPerUnit

`func (o *EventItemType) SetExternalCostPerUnit(v float32)`

SetExternalCostPerUnit sets ExternalCostPerUnit field to given value.

### HasExternalCostPerUnit

`func (o *EventItemType) HasExternalCostPerUnit() bool`

HasExternalCostPerUnit returns a boolean if a field has been set.

### GetActualInternalCostPerUnit

`func (o *EventItemType) GetActualInternalCostPerUnit() float32`

GetActualInternalCostPerUnit returns the ActualInternalCostPerUnit field if non-nil, zero value otherwise.

### GetActualInternalCostPerUnitOk

`func (o *EventItemType) GetActualInternalCostPerUnitOk() (*float32, bool)`

GetActualInternalCostPerUnitOk returns a tuple with the ActualInternalCostPerUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualInternalCostPerUnit

`func (o *EventItemType) SetActualInternalCostPerUnit(v float32)`

SetActualInternalCostPerUnit sets ActualInternalCostPerUnit field to given value.

### HasActualInternalCostPerUnit

`func (o *EventItemType) HasActualInternalCostPerUnit() bool`

HasActualInternalCostPerUnit returns a boolean if a field has been set.

### GetActualExternalCostPerUnit

`func (o *EventItemType) GetActualExternalCostPerUnit() float32`

GetActualExternalCostPerUnit returns the ActualExternalCostPerUnit field if non-nil, zero value otherwise.

### GetActualExternalCostPerUnitOk

`func (o *EventItemType) GetActualExternalCostPerUnitOk() (*float32, bool)`

GetActualExternalCostPerUnitOk returns a tuple with the ActualExternalCostPerUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualExternalCostPerUnit

`func (o *EventItemType) SetActualExternalCostPerUnit(v float32)`

SetActualExternalCostPerUnit sets ActualExternalCostPerUnit field to given value.

### HasActualExternalCostPerUnit

`func (o *EventItemType) HasActualExternalCostPerUnit() bool`

HasActualExternalCostPerUnit returns a boolean if a field has been set.

### GetOrder

`func (o *EventItemType) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *EventItemType) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *EventItemType) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *EventItemType) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetActualQuantity

`func (o *EventItemType) GetActualQuantity() float32`

GetActualQuantity returns the ActualQuantity field if non-nil, zero value otherwise.

### GetActualQuantityOk

`func (o *EventItemType) GetActualQuantityOk() (*float32, bool)`

GetActualQuantityOk returns a tuple with the ActualQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualQuantity

`func (o *EventItemType) SetActualQuantity(v float32)`

SetActualQuantity sets ActualQuantity field to given value.

### HasActualQuantity

`func (o *EventItemType) HasActualQuantity() bool`

HasActualQuantity returns a boolean if a field has been set.

### GetPackageId

`func (o *EventItemType) GetPackageId() UniqueIDType`

GetPackageId returns the PackageId field if non-nil, zero value otherwise.

### GetPackageIdOk

`func (o *EventItemType) GetPackageIdOk() (*UniqueIDType, bool)`

GetPackageIdOk returns a tuple with the PackageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageId

`func (o *EventItemType) SetPackageId(v UniqueIDType)`

SetPackageId sets PackageId field to given value.

### HasPackageId

`func (o *EventItemType) HasPackageId() bool`

HasPackageId returns a boolean if a field has been set.

### GetIsNameCustom

`func (o *EventItemType) GetIsNameCustom() bool`

GetIsNameCustom returns the IsNameCustom field if non-nil, zero value otherwise.

### GetIsNameCustomOk

`func (o *EventItemType) GetIsNameCustomOk() (*bool, bool)`

GetIsNameCustomOk returns a tuple with the IsNameCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsNameCustom

`func (o *EventItemType) SetIsNameCustom(v bool)`

SetIsNameCustom sets IsNameCustom field to given value.

### HasIsNameCustom

`func (o *EventItemType) HasIsNameCustom() bool`

HasIsNameCustom returns a boolean if a field has been set.

### GetIsExcludeNonDeduct

`func (o *EventItemType) GetIsExcludeNonDeduct() bool`

GetIsExcludeNonDeduct returns the IsExcludeNonDeduct field if non-nil, zero value otherwise.

### GetIsExcludeNonDeductOk

`func (o *EventItemType) GetIsExcludeNonDeductOk() (*bool, bool)`

GetIsExcludeNonDeductOk returns a tuple with the IsExcludeNonDeduct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsExcludeNonDeduct

`func (o *EventItemType) SetIsExcludeNonDeduct(v bool)`

SetIsExcludeNonDeduct sets IsExcludeNonDeduct field to given value.

### HasIsExcludeNonDeduct

`func (o *EventItemType) HasIsExcludeNonDeduct() bool`

HasIsExcludeNonDeduct returns a boolean if a field has been set.

### GetVendorPrice

`func (o *EventItemType) GetVendorPrice() float32`

GetVendorPrice returns the VendorPrice field if non-nil, zero value otherwise.

### GetVendorPriceOk

`func (o *EventItemType) GetVendorPriceOk() (*float32, bool)`

GetVendorPriceOk returns a tuple with the VendorPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorPrice

`func (o *EventItemType) SetVendorPrice(v float32)`

SetVendorPrice sets VendorPrice field to given value.

### HasVendorPrice

`func (o *EventItemType) HasVendorPrice() bool`

HasVendorPrice returns a boolean if a field has been set.

### GetEventStartDate

`func (o *EventItemType) GetEventStartDate() string`

GetEventStartDate returns the EventStartDate field if non-nil, zero value otherwise.

### GetEventStartDateOk

`func (o *EventItemType) GetEventStartDateOk() (*string, bool)`

GetEventStartDateOk returns a tuple with the EventStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartDate

`func (o *EventItemType) SetEventStartDate(v string)`

SetEventStartDate sets EventStartDate field to given value.

### HasEventStartDate

`func (o *EventItemType) HasEventStartDate() bool`

HasEventStartDate returns a boolean if a field has been set.

### GetEventEndDate

`func (o *EventItemType) GetEventEndDate() string`

GetEventEndDate returns the EventEndDate field if non-nil, zero value otherwise.

### GetEventEndDateOk

`func (o *EventItemType) GetEventEndDateOk() (*string, bool)`

GetEventEndDateOk returns a tuple with the EventEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndDate

`func (o *EventItemType) SetEventEndDate(v string)`

SetEventEndDate sets EventEndDate field to given value.

### HasEventEndDate

`func (o *EventItemType) HasEventEndDate() bool`

HasEventEndDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


