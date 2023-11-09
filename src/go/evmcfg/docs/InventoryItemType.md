# InventoryItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**ItemAttributesType**](ItemAttributesType.md) |  | [optional] 
**Departments** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**DisplaySequence** | Pointer to **float32** | The display sequence of the Item. | [optional] 
**EventTypes** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**ExternalOrder** | Pointer to **bool** | Flag to define if the inventory item can be ordered externally when the item is marked as critical. | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the item belongs to. | [optional] 
**ItemClassCode** | Pointer to **string** | The Item Class Code which the item belongs to. | [optional] 
**ItemClassDescription** | Pointer to **string** | The Description of the Item Class. | [optional] 
**ItemClassDisplaySequence** | Pointer to **float32** | Display sequence of Item Class. | [optional] 
**ItemClassId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemCode** | Pointer to **string** | The Article Number of the Item. | [optional] 
**ItemDescription** | Pointer to **string** | The Description of the Item. | [optional] 
**ItemFromTemplate** | Pointer to **bool** | Indicates whether Item is from a Template or not. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemName** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**ItemPool** | Pointer to **string** | The Item Pool description of the Item. | [optional] 
**Print** | Pointer to **bool** | The Revenue Type of the Item. | [optional] 
**Rates** | Pointer to [**ItemRatesType**](ItemRatesType.md) |  | [optional] 
**ResourceNotes** | Pointer to [**EventResourceNotesType**](EventResourceNotesType.md) |  | [optional] 
**RevenueType** | Pointer to **string** | The Revenue Type of the Item. | [optional] 
**RevenueTypeEditable** | Pointer to **bool** | If true, the revenue could be changed. | [optional] 
**SellInfo** | Pointer to [**InventoryItemTypeSellInfo**](InventoryItemTypeSellInfo.md) |  | [optional] 
**SetdownTime** | Pointer to **float32** | Setdown Time of the Item in minutes. | [optional] 
**SetupTime** | Pointer to **float32** | Setup Time of the Item in minutes. | [optional] 
**TraceText** | Pointer to **string** | The Trace Text of the Item. | [optional] 
**UsedForEvents** | Pointer to **bool** | If true, the item is used for events. | [optional] 
**UsedForReservation** | Pointer to **bool** | If true, the item is used for reservation. | [optional] 
**Vendors** | Pointer to [**ItemVendorsType**](ItemVendorsType.md) |  | [optional] 

## Methods

### NewInventoryItemType

`func NewInventoryItemType() *InventoryItemType`

NewInventoryItemType instantiates a new InventoryItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemTypeWithDefaults

`func NewInventoryItemTypeWithDefaults() *InventoryItemType`

NewInventoryItemTypeWithDefaults instantiates a new InventoryItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *InventoryItemType) GetAttributes() ItemAttributesType`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *InventoryItemType) GetAttributesOk() (*ItemAttributesType, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *InventoryItemType) SetAttributes(v ItemAttributesType)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *InventoryItemType) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetDepartments

`func (o *InventoryItemType) GetDepartments() CodeListType`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *InventoryItemType) GetDepartmentsOk() (*CodeListType, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *InventoryItemType) SetDepartments(v CodeListType)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *InventoryItemType) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *InventoryItemType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *InventoryItemType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *InventoryItemType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *InventoryItemType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetEventTypes

`func (o *InventoryItemType) GetEventTypes() CodeListType`

GetEventTypes returns the EventTypes field if non-nil, zero value otherwise.

### GetEventTypesOk

`func (o *InventoryItemType) GetEventTypesOk() (*CodeListType, bool)`

GetEventTypesOk returns a tuple with the EventTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypes

`func (o *InventoryItemType) SetEventTypes(v CodeListType)`

SetEventTypes sets EventTypes field to given value.

### HasEventTypes

`func (o *InventoryItemType) HasEventTypes() bool`

HasEventTypes returns a boolean if a field has been set.

### GetExternalOrder

`func (o *InventoryItemType) GetExternalOrder() bool`

GetExternalOrder returns the ExternalOrder field if non-nil, zero value otherwise.

### GetExternalOrderOk

`func (o *InventoryItemType) GetExternalOrderOk() (*bool, bool)`

GetExternalOrderOk returns a tuple with the ExternalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalOrder

`func (o *InventoryItemType) SetExternalOrder(v bool)`

SetExternalOrder sets ExternalOrder field to given value.

### HasExternalOrder

`func (o *InventoryItemType) HasExternalOrder() bool`

HasExternalOrder returns a boolean if a field has been set.

### GetHotelId

`func (o *InventoryItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InventoryItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InventoryItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InventoryItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemClassCode

`func (o *InventoryItemType) GetItemClassCode() string`

GetItemClassCode returns the ItemClassCode field if non-nil, zero value otherwise.

### GetItemClassCodeOk

`func (o *InventoryItemType) GetItemClassCodeOk() (*string, bool)`

GetItemClassCodeOk returns a tuple with the ItemClassCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassCode

`func (o *InventoryItemType) SetItemClassCode(v string)`

SetItemClassCode sets ItemClassCode field to given value.

### HasItemClassCode

`func (o *InventoryItemType) HasItemClassCode() bool`

HasItemClassCode returns a boolean if a field has been set.

### GetItemClassDescription

`func (o *InventoryItemType) GetItemClassDescription() string`

GetItemClassDescription returns the ItemClassDescription field if non-nil, zero value otherwise.

### GetItemClassDescriptionOk

`func (o *InventoryItemType) GetItemClassDescriptionOk() (*string, bool)`

GetItemClassDescriptionOk returns a tuple with the ItemClassDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassDescription

`func (o *InventoryItemType) SetItemClassDescription(v string)`

SetItemClassDescription sets ItemClassDescription field to given value.

### HasItemClassDescription

`func (o *InventoryItemType) HasItemClassDescription() bool`

HasItemClassDescription returns a boolean if a field has been set.

### GetItemClassDisplaySequence

`func (o *InventoryItemType) GetItemClassDisplaySequence() float32`

GetItemClassDisplaySequence returns the ItemClassDisplaySequence field if non-nil, zero value otherwise.

### GetItemClassDisplaySequenceOk

`func (o *InventoryItemType) GetItemClassDisplaySequenceOk() (*float32, bool)`

GetItemClassDisplaySequenceOk returns a tuple with the ItemClassDisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassDisplaySequence

`func (o *InventoryItemType) SetItemClassDisplaySequence(v float32)`

SetItemClassDisplaySequence sets ItemClassDisplaySequence field to given value.

### HasItemClassDisplaySequence

`func (o *InventoryItemType) HasItemClassDisplaySequence() bool`

HasItemClassDisplaySequence returns a boolean if a field has been set.

### GetItemClassId

`func (o *InventoryItemType) GetItemClassId() UniqueIDType`

GetItemClassId returns the ItemClassId field if non-nil, zero value otherwise.

### GetItemClassIdOk

`func (o *InventoryItemType) GetItemClassIdOk() (*UniqueIDType, bool)`

GetItemClassIdOk returns a tuple with the ItemClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassId

`func (o *InventoryItemType) SetItemClassId(v UniqueIDType)`

SetItemClassId sets ItemClassId field to given value.

### HasItemClassId

`func (o *InventoryItemType) HasItemClassId() bool`

HasItemClassId returns a boolean if a field has been set.

### GetItemCode

`func (o *InventoryItemType) GetItemCode() string`

GetItemCode returns the ItemCode field if non-nil, zero value otherwise.

### GetItemCodeOk

`func (o *InventoryItemType) GetItemCodeOk() (*string, bool)`

GetItemCodeOk returns a tuple with the ItemCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemCode

`func (o *InventoryItemType) SetItemCode(v string)`

SetItemCode sets ItemCode field to given value.

### HasItemCode

`func (o *InventoryItemType) HasItemCode() bool`

HasItemCode returns a boolean if a field has been set.

### GetItemDescription

`func (o *InventoryItemType) GetItemDescription() string`

GetItemDescription returns the ItemDescription field if non-nil, zero value otherwise.

### GetItemDescriptionOk

`func (o *InventoryItemType) GetItemDescriptionOk() (*string, bool)`

GetItemDescriptionOk returns a tuple with the ItemDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemDescription

`func (o *InventoryItemType) SetItemDescription(v string)`

SetItemDescription sets ItemDescription field to given value.

### HasItemDescription

`func (o *InventoryItemType) HasItemDescription() bool`

HasItemDescription returns a boolean if a field has been set.

### GetItemFromTemplate

`func (o *InventoryItemType) GetItemFromTemplate() bool`

GetItemFromTemplate returns the ItemFromTemplate field if non-nil, zero value otherwise.

### GetItemFromTemplateOk

`func (o *InventoryItemType) GetItemFromTemplateOk() (*bool, bool)`

GetItemFromTemplateOk returns a tuple with the ItemFromTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemFromTemplate

`func (o *InventoryItemType) SetItemFromTemplate(v bool)`

SetItemFromTemplate sets ItemFromTemplate field to given value.

### HasItemFromTemplate

`func (o *InventoryItemType) HasItemFromTemplate() bool`

HasItemFromTemplate returns a boolean if a field has been set.

### GetItemId

`func (o *InventoryItemType) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *InventoryItemType) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *InventoryItemType) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *InventoryItemType) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetItemName

`func (o *InventoryItemType) GetItemName() TranslationTextType200`

GetItemName returns the ItemName field if non-nil, zero value otherwise.

### GetItemNameOk

`func (o *InventoryItemType) GetItemNameOk() (*TranslationTextType200, bool)`

GetItemNameOk returns a tuple with the ItemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemName

`func (o *InventoryItemType) SetItemName(v TranslationTextType200)`

SetItemName sets ItemName field to given value.

### HasItemName

`func (o *InventoryItemType) HasItemName() bool`

HasItemName returns a boolean if a field has been set.

### GetItemPool

`func (o *InventoryItemType) GetItemPool() string`

GetItemPool returns the ItemPool field if non-nil, zero value otherwise.

### GetItemPoolOk

`func (o *InventoryItemType) GetItemPoolOk() (*string, bool)`

GetItemPoolOk returns a tuple with the ItemPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemPool

`func (o *InventoryItemType) SetItemPool(v string)`

SetItemPool sets ItemPool field to given value.

### HasItemPool

`func (o *InventoryItemType) HasItemPool() bool`

HasItemPool returns a boolean if a field has been set.

### GetPrint

`func (o *InventoryItemType) GetPrint() bool`

GetPrint returns the Print field if non-nil, zero value otherwise.

### GetPrintOk

`func (o *InventoryItemType) GetPrintOk() (*bool, bool)`

GetPrintOk returns a tuple with the Print field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrint

`func (o *InventoryItemType) SetPrint(v bool)`

SetPrint sets Print field to given value.

### HasPrint

`func (o *InventoryItemType) HasPrint() bool`

HasPrint returns a boolean if a field has been set.

### GetRates

`func (o *InventoryItemType) GetRates() ItemRatesType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *InventoryItemType) GetRatesOk() (*ItemRatesType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *InventoryItemType) SetRates(v ItemRatesType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *InventoryItemType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetResourceNotes

`func (o *InventoryItemType) GetResourceNotes() EventResourceNotesType`

GetResourceNotes returns the ResourceNotes field if non-nil, zero value otherwise.

### GetResourceNotesOk

`func (o *InventoryItemType) GetResourceNotesOk() (*EventResourceNotesType, bool)`

GetResourceNotesOk returns a tuple with the ResourceNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceNotes

`func (o *InventoryItemType) SetResourceNotes(v EventResourceNotesType)`

SetResourceNotes sets ResourceNotes field to given value.

### HasResourceNotes

`func (o *InventoryItemType) HasResourceNotes() bool`

HasResourceNotes returns a boolean if a field has been set.

### GetRevenueType

`func (o *InventoryItemType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *InventoryItemType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *InventoryItemType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *InventoryItemType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetRevenueTypeEditable

`func (o *InventoryItemType) GetRevenueTypeEditable() bool`

GetRevenueTypeEditable returns the RevenueTypeEditable field if non-nil, zero value otherwise.

### GetRevenueTypeEditableOk

`func (o *InventoryItemType) GetRevenueTypeEditableOk() (*bool, bool)`

GetRevenueTypeEditableOk returns a tuple with the RevenueTypeEditable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeEditable

`func (o *InventoryItemType) SetRevenueTypeEditable(v bool)`

SetRevenueTypeEditable sets RevenueTypeEditable field to given value.

### HasRevenueTypeEditable

`func (o *InventoryItemType) HasRevenueTypeEditable() bool`

HasRevenueTypeEditable returns a boolean if a field has been set.

### GetSellInfo

`func (o *InventoryItemType) GetSellInfo() InventoryItemTypeSellInfo`

GetSellInfo returns the SellInfo field if non-nil, zero value otherwise.

### GetSellInfoOk

`func (o *InventoryItemType) GetSellInfoOk() (*InventoryItemTypeSellInfo, bool)`

GetSellInfoOk returns a tuple with the SellInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellInfo

`func (o *InventoryItemType) SetSellInfo(v InventoryItemTypeSellInfo)`

SetSellInfo sets SellInfo field to given value.

### HasSellInfo

`func (o *InventoryItemType) HasSellInfo() bool`

HasSellInfo returns a boolean if a field has been set.

### GetSetdownTime

`func (o *InventoryItemType) GetSetdownTime() float32`

GetSetdownTime returns the SetdownTime field if non-nil, zero value otherwise.

### GetSetdownTimeOk

`func (o *InventoryItemType) GetSetdownTimeOk() (*float32, bool)`

GetSetdownTimeOk returns a tuple with the SetdownTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetdownTime

`func (o *InventoryItemType) SetSetdownTime(v float32)`

SetSetdownTime sets SetdownTime field to given value.

### HasSetdownTime

`func (o *InventoryItemType) HasSetdownTime() bool`

HasSetdownTime returns a boolean if a field has been set.

### GetSetupTime

`func (o *InventoryItemType) GetSetupTime() float32`

GetSetupTime returns the SetupTime field if non-nil, zero value otherwise.

### GetSetupTimeOk

`func (o *InventoryItemType) GetSetupTimeOk() (*float32, bool)`

GetSetupTimeOk returns a tuple with the SetupTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupTime

`func (o *InventoryItemType) SetSetupTime(v float32)`

SetSetupTime sets SetupTime field to given value.

### HasSetupTime

`func (o *InventoryItemType) HasSetupTime() bool`

HasSetupTime returns a boolean if a field has been set.

### GetTraceText

`func (o *InventoryItemType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *InventoryItemType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *InventoryItemType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *InventoryItemType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetUsedForEvents

`func (o *InventoryItemType) GetUsedForEvents() bool`

GetUsedForEvents returns the UsedForEvents field if non-nil, zero value otherwise.

### GetUsedForEventsOk

`func (o *InventoryItemType) GetUsedForEventsOk() (*bool, bool)`

GetUsedForEventsOk returns a tuple with the UsedForEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedForEvents

`func (o *InventoryItemType) SetUsedForEvents(v bool)`

SetUsedForEvents sets UsedForEvents field to given value.

### HasUsedForEvents

`func (o *InventoryItemType) HasUsedForEvents() bool`

HasUsedForEvents returns a boolean if a field has been set.

### GetUsedForReservation

`func (o *InventoryItemType) GetUsedForReservation() bool`

GetUsedForReservation returns the UsedForReservation field if non-nil, zero value otherwise.

### GetUsedForReservationOk

`func (o *InventoryItemType) GetUsedForReservationOk() (*bool, bool)`

GetUsedForReservationOk returns a tuple with the UsedForReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsedForReservation

`func (o *InventoryItemType) SetUsedForReservation(v bool)`

SetUsedForReservation sets UsedForReservation field to given value.

### HasUsedForReservation

`func (o *InventoryItemType) HasUsedForReservation() bool`

HasUsedForReservation returns a boolean if a field has been set.

### GetVendors

`func (o *InventoryItemType) GetVendors() ItemVendorsType`

GetVendors returns the Vendors field if non-nil, zero value otherwise.

### GetVendorsOk

`func (o *InventoryItemType) GetVendorsOk() (*ItemVendorsType, bool)`

GetVendorsOk returns a tuple with the Vendors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendors

`func (o *InventoryItemType) SetVendors(v ItemVendorsType)`

SetVendors sets Vendors field to given value.

### HasVendors

`func (o *InventoryItemType) HasVendors() bool`

HasVendors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


