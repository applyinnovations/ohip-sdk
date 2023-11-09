# CateringEventResourceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConsumptionBased** | Pointer to **bool** | Indicates that this resource is consumption based in a catering package | [optional] 
**Custom** | Pointer to **bool** | Indicates that this resource item is a custom item added for this event. | [optional] 
**Discount** | Pointer to **float32** | The menu discount percentage. | [optional] 
**EventEndDate** | Pointer to **string** | Event End Date of resource of type Menu. | [optional] 
**EventResourceNotes** | Pointer to [**EventResourceNotesType**](EventResourceNotesType.md) |  | [optional] 
**EventStartDate** | Pointer to **string** | Event Start Date of resource of type Menu. | [optional] 
**External** | Pointer to **bool** | Indicates that item must be ordered externally. | [optional] 
**HasDiscountMenuItem** | Pointer to **bool** | Flag that indicates if at least one menu item has a discount. | [optional] 
**HasNotes** | Pointer to **bool** | Flag that indicates the resource has notes associated with it. | [optional] 
**HotelId** | Pointer to **string** | Hotel code which the event resource belong to. | [optional] 
**Hours** | Pointer to **float32** | The number of charged hours for the resource. | [optional] 
**ItemAttribute** | Pointer to **string** | Item attribute name for non Food and Beverage item. | [optional] 
**MultiChoice** | Pointer to **bool** | Indicates that this resource is a MultiChoice Menu or not | [optional] 
**Order** | Pointer to **string** | The order of the resource in the Banquet Event Order within their specific resource group. | [optional] 
**Packaged** | Pointer to **bool** | Indicates that this resource is included in a catering package. | [optional] 
**Persons** | Pointer to **float32** | The number of charged persons for the resource. | [optional] 
**Quantity** | Pointer to **float32** | The required quantity of the resource. | [optional] 
**QuantityExcluded** | Pointer to **float32** | The attendees/quantity charged extra, EXCLUDED from the package price. | [optional] 
**QuantityIncluded** | Pointer to **float32** | The attendees/quantity of an item INCLUDED in a package price. | [optional] 
**RentalCode** | Pointer to **string** | Rate Code that is attached to the function spaces and non Food and Beverage items | [optional] 
**ResourceId** | Pointer to [**ResourceId**](ResourceId.md) |  | [optional] 
**ResourceName** | Pointer to **string** | Resource name, this could be a resource item or a menu. | [optional] 
**ResourceType** | Pointer to [**ResourceType**](ResourceType.md) |  | [optional] 
**Revenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**SellEndDate** | Pointer to **string** | Sell End Date of resource of type Menu. | [optional] 
**SellStartDate** | Pointer to **string** | Sell Start Date of resource of type Menu. | [optional] 
**SetupCode** | Pointer to **string** | Setup style for the function space. | [optional] 
**UnitPrice** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewCateringEventResourceType

`func NewCateringEventResourceType() *CateringEventResourceType`

NewCateringEventResourceType instantiates a new CateringEventResourceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventResourceTypeWithDefaults

`func NewCateringEventResourceTypeWithDefaults() *CateringEventResourceType`

NewCateringEventResourceTypeWithDefaults instantiates a new CateringEventResourceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConsumptionBased

`func (o *CateringEventResourceType) GetConsumptionBased() bool`

GetConsumptionBased returns the ConsumptionBased field if non-nil, zero value otherwise.

### GetConsumptionBasedOk

`func (o *CateringEventResourceType) GetConsumptionBasedOk() (*bool, bool)`

GetConsumptionBasedOk returns a tuple with the ConsumptionBased field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionBased

`func (o *CateringEventResourceType) SetConsumptionBased(v bool)`

SetConsumptionBased sets ConsumptionBased field to given value.

### HasConsumptionBased

`func (o *CateringEventResourceType) HasConsumptionBased() bool`

HasConsumptionBased returns a boolean if a field has been set.

### GetCustom

`func (o *CateringEventResourceType) GetCustom() bool`

GetCustom returns the Custom field if non-nil, zero value otherwise.

### GetCustomOk

`func (o *CateringEventResourceType) GetCustomOk() (*bool, bool)`

GetCustomOk returns a tuple with the Custom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustom

`func (o *CateringEventResourceType) SetCustom(v bool)`

SetCustom sets Custom field to given value.

### HasCustom

`func (o *CateringEventResourceType) HasCustom() bool`

HasCustom returns a boolean if a field has been set.

### GetDiscount

`func (o *CateringEventResourceType) GetDiscount() float32`

GetDiscount returns the Discount field if non-nil, zero value otherwise.

### GetDiscountOk

`func (o *CateringEventResourceType) GetDiscountOk() (*float32, bool)`

GetDiscountOk returns a tuple with the Discount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscount

`func (o *CateringEventResourceType) SetDiscount(v float32)`

SetDiscount sets Discount field to given value.

### HasDiscount

`func (o *CateringEventResourceType) HasDiscount() bool`

HasDiscount returns a boolean if a field has been set.

### GetEventEndDate

`func (o *CateringEventResourceType) GetEventEndDate() string`

GetEventEndDate returns the EventEndDate field if non-nil, zero value otherwise.

### GetEventEndDateOk

`func (o *CateringEventResourceType) GetEventEndDateOk() (*string, bool)`

GetEventEndDateOk returns a tuple with the EventEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndDate

`func (o *CateringEventResourceType) SetEventEndDate(v string)`

SetEventEndDate sets EventEndDate field to given value.

### HasEventEndDate

`func (o *CateringEventResourceType) HasEventEndDate() bool`

HasEventEndDate returns a boolean if a field has been set.

### GetEventResourceNotes

`func (o *CateringEventResourceType) GetEventResourceNotes() EventResourceNotesType`

GetEventResourceNotes returns the EventResourceNotes field if non-nil, zero value otherwise.

### GetEventResourceNotesOk

`func (o *CateringEventResourceType) GetEventResourceNotesOk() (*EventResourceNotesType, bool)`

GetEventResourceNotesOk returns a tuple with the EventResourceNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventResourceNotes

`func (o *CateringEventResourceType) SetEventResourceNotes(v EventResourceNotesType)`

SetEventResourceNotes sets EventResourceNotes field to given value.

### HasEventResourceNotes

`func (o *CateringEventResourceType) HasEventResourceNotes() bool`

HasEventResourceNotes returns a boolean if a field has been set.

### GetEventStartDate

`func (o *CateringEventResourceType) GetEventStartDate() string`

GetEventStartDate returns the EventStartDate field if non-nil, zero value otherwise.

### GetEventStartDateOk

`func (o *CateringEventResourceType) GetEventStartDateOk() (*string, bool)`

GetEventStartDateOk returns a tuple with the EventStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartDate

`func (o *CateringEventResourceType) SetEventStartDate(v string)`

SetEventStartDate sets EventStartDate field to given value.

### HasEventStartDate

`func (o *CateringEventResourceType) HasEventStartDate() bool`

HasEventStartDate returns a boolean if a field has been set.

### GetExternal

`func (o *CateringEventResourceType) GetExternal() bool`

GetExternal returns the External field if non-nil, zero value otherwise.

### GetExternalOk

`func (o *CateringEventResourceType) GetExternalOk() (*bool, bool)`

GetExternalOk returns a tuple with the External field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternal

`func (o *CateringEventResourceType) SetExternal(v bool)`

SetExternal sets External field to given value.

### HasExternal

`func (o *CateringEventResourceType) HasExternal() bool`

HasExternal returns a boolean if a field has been set.

### GetHasDiscountMenuItem

`func (o *CateringEventResourceType) GetHasDiscountMenuItem() bool`

GetHasDiscountMenuItem returns the HasDiscountMenuItem field if non-nil, zero value otherwise.

### GetHasDiscountMenuItemOk

`func (o *CateringEventResourceType) GetHasDiscountMenuItemOk() (*bool, bool)`

GetHasDiscountMenuItemOk returns a tuple with the HasDiscountMenuItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasDiscountMenuItem

`func (o *CateringEventResourceType) SetHasDiscountMenuItem(v bool)`

SetHasDiscountMenuItem sets HasDiscountMenuItem field to given value.

### HasHasDiscountMenuItem

`func (o *CateringEventResourceType) HasHasDiscountMenuItem() bool`

HasHasDiscountMenuItem returns a boolean if a field has been set.

### GetHasNotes

`func (o *CateringEventResourceType) GetHasNotes() bool`

GetHasNotes returns the HasNotes field if non-nil, zero value otherwise.

### GetHasNotesOk

`func (o *CateringEventResourceType) GetHasNotesOk() (*bool, bool)`

GetHasNotesOk returns a tuple with the HasNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasNotes

`func (o *CateringEventResourceType) SetHasNotes(v bool)`

SetHasNotes sets HasNotes field to given value.

### HasHasNotes

`func (o *CateringEventResourceType) HasHasNotes() bool`

HasHasNotes returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringEventResourceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringEventResourceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringEventResourceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringEventResourceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHours

`func (o *CateringEventResourceType) GetHours() float32`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *CateringEventResourceType) GetHoursOk() (*float32, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *CateringEventResourceType) SetHours(v float32)`

SetHours sets Hours field to given value.

### HasHours

`func (o *CateringEventResourceType) HasHours() bool`

HasHours returns a boolean if a field has been set.

### GetItemAttribute

`func (o *CateringEventResourceType) GetItemAttribute() string`

GetItemAttribute returns the ItemAttribute field if non-nil, zero value otherwise.

### GetItemAttributeOk

`func (o *CateringEventResourceType) GetItemAttributeOk() (*string, bool)`

GetItemAttributeOk returns a tuple with the ItemAttribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemAttribute

`func (o *CateringEventResourceType) SetItemAttribute(v string)`

SetItemAttribute sets ItemAttribute field to given value.

### HasItemAttribute

`func (o *CateringEventResourceType) HasItemAttribute() bool`

HasItemAttribute returns a boolean if a field has been set.

### GetMultiChoice

`func (o *CateringEventResourceType) GetMultiChoice() bool`

GetMultiChoice returns the MultiChoice field if non-nil, zero value otherwise.

### GetMultiChoiceOk

`func (o *CateringEventResourceType) GetMultiChoiceOk() (*bool, bool)`

GetMultiChoiceOk returns a tuple with the MultiChoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMultiChoice

`func (o *CateringEventResourceType) SetMultiChoice(v bool)`

SetMultiChoice sets MultiChoice field to given value.

### HasMultiChoice

`func (o *CateringEventResourceType) HasMultiChoice() bool`

HasMultiChoice returns a boolean if a field has been set.

### GetOrder

`func (o *CateringEventResourceType) GetOrder() string`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *CateringEventResourceType) GetOrderOk() (*string, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *CateringEventResourceType) SetOrder(v string)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *CateringEventResourceType) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetPackaged

`func (o *CateringEventResourceType) GetPackaged() bool`

GetPackaged returns the Packaged field if non-nil, zero value otherwise.

### GetPackagedOk

`func (o *CateringEventResourceType) GetPackagedOk() (*bool, bool)`

GetPackagedOk returns a tuple with the Packaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackaged

`func (o *CateringEventResourceType) SetPackaged(v bool)`

SetPackaged sets Packaged field to given value.

### HasPackaged

`func (o *CateringEventResourceType) HasPackaged() bool`

HasPackaged returns a boolean if a field has been set.

### GetPersons

`func (o *CateringEventResourceType) GetPersons() float32`

GetPersons returns the Persons field if non-nil, zero value otherwise.

### GetPersonsOk

`func (o *CateringEventResourceType) GetPersonsOk() (*float32, bool)`

GetPersonsOk returns a tuple with the Persons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersons

`func (o *CateringEventResourceType) SetPersons(v float32)`

SetPersons sets Persons field to given value.

### HasPersons

`func (o *CateringEventResourceType) HasPersons() bool`

HasPersons returns a boolean if a field has been set.

### GetQuantity

`func (o *CateringEventResourceType) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *CateringEventResourceType) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *CateringEventResourceType) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *CateringEventResourceType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetQuantityExcluded

`func (o *CateringEventResourceType) GetQuantityExcluded() float32`

GetQuantityExcluded returns the QuantityExcluded field if non-nil, zero value otherwise.

### GetQuantityExcludedOk

`func (o *CateringEventResourceType) GetQuantityExcludedOk() (*float32, bool)`

GetQuantityExcludedOk returns a tuple with the QuantityExcluded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantityExcluded

`func (o *CateringEventResourceType) SetQuantityExcluded(v float32)`

SetQuantityExcluded sets QuantityExcluded field to given value.

### HasQuantityExcluded

`func (o *CateringEventResourceType) HasQuantityExcluded() bool`

HasQuantityExcluded returns a boolean if a field has been set.

### GetQuantityIncluded

`func (o *CateringEventResourceType) GetQuantityIncluded() float32`

GetQuantityIncluded returns the QuantityIncluded field if non-nil, zero value otherwise.

### GetQuantityIncludedOk

`func (o *CateringEventResourceType) GetQuantityIncludedOk() (*float32, bool)`

GetQuantityIncludedOk returns a tuple with the QuantityIncluded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantityIncluded

`func (o *CateringEventResourceType) SetQuantityIncluded(v float32)`

SetQuantityIncluded sets QuantityIncluded field to given value.

### HasQuantityIncluded

`func (o *CateringEventResourceType) HasQuantityIncluded() bool`

HasQuantityIncluded returns a boolean if a field has been set.

### GetRentalCode

`func (o *CateringEventResourceType) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *CateringEventResourceType) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *CateringEventResourceType) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *CateringEventResourceType) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetResourceId

`func (o *CateringEventResourceType) GetResourceId() ResourceId`

GetResourceId returns the ResourceId field if non-nil, zero value otherwise.

### GetResourceIdOk

`func (o *CateringEventResourceType) GetResourceIdOk() (*ResourceId, bool)`

GetResourceIdOk returns a tuple with the ResourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceId

`func (o *CateringEventResourceType) SetResourceId(v ResourceId)`

SetResourceId sets ResourceId field to given value.

### HasResourceId

`func (o *CateringEventResourceType) HasResourceId() bool`

HasResourceId returns a boolean if a field has been set.

### GetResourceName

`func (o *CateringEventResourceType) GetResourceName() string`

GetResourceName returns the ResourceName field if non-nil, zero value otherwise.

### GetResourceNameOk

`func (o *CateringEventResourceType) GetResourceNameOk() (*string, bool)`

GetResourceNameOk returns a tuple with the ResourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceName

`func (o *CateringEventResourceType) SetResourceName(v string)`

SetResourceName sets ResourceName field to given value.

### HasResourceName

`func (o *CateringEventResourceType) HasResourceName() bool`

HasResourceName returns a boolean if a field has been set.

### GetResourceType

`func (o *CateringEventResourceType) GetResourceType() ResourceType`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *CateringEventResourceType) GetResourceTypeOk() (*ResourceType, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *CateringEventResourceType) SetResourceType(v ResourceType)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *CateringEventResourceType) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetRevenue

`func (o *CateringEventResourceType) GetRevenue() CurrencyAmountType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *CateringEventResourceType) GetRevenueOk() (*CurrencyAmountType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *CateringEventResourceType) SetRevenue(v CurrencyAmountType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *CateringEventResourceType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetSellEndDate

`func (o *CateringEventResourceType) GetSellEndDate() string`

GetSellEndDate returns the SellEndDate field if non-nil, zero value otherwise.

### GetSellEndDateOk

`func (o *CateringEventResourceType) GetSellEndDateOk() (*string, bool)`

GetSellEndDateOk returns a tuple with the SellEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellEndDate

`func (o *CateringEventResourceType) SetSellEndDate(v string)`

SetSellEndDate sets SellEndDate field to given value.

### HasSellEndDate

`func (o *CateringEventResourceType) HasSellEndDate() bool`

HasSellEndDate returns a boolean if a field has been set.

### GetSellStartDate

`func (o *CateringEventResourceType) GetSellStartDate() string`

GetSellStartDate returns the SellStartDate field if non-nil, zero value otherwise.

### GetSellStartDateOk

`func (o *CateringEventResourceType) GetSellStartDateOk() (*string, bool)`

GetSellStartDateOk returns a tuple with the SellStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellStartDate

`func (o *CateringEventResourceType) SetSellStartDate(v string)`

SetSellStartDate sets SellStartDate field to given value.

### HasSellStartDate

`func (o *CateringEventResourceType) HasSellStartDate() bool`

HasSellStartDate returns a boolean if a field has been set.

### GetSetupCode

`func (o *CateringEventResourceType) GetSetupCode() string`

GetSetupCode returns the SetupCode field if non-nil, zero value otherwise.

### GetSetupCodeOk

`func (o *CateringEventResourceType) GetSetupCodeOk() (*string, bool)`

GetSetupCodeOk returns a tuple with the SetupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupCode

`func (o *CateringEventResourceType) SetSetupCode(v string)`

SetSetupCode sets SetupCode field to given value.

### HasSetupCode

`func (o *CateringEventResourceType) HasSetupCode() bool`

HasSetupCode returns a boolean if a field has been set.

### GetUnitPrice

`func (o *CateringEventResourceType) GetUnitPrice() CurrencyAmountType`

GetUnitPrice returns the UnitPrice field if non-nil, zero value otherwise.

### GetUnitPriceOk

`func (o *CateringEventResourceType) GetUnitPriceOk() (*CurrencyAmountType, bool)`

GetUnitPriceOk returns a tuple with the UnitPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitPrice

`func (o *CateringEventResourceType) SetUnitPrice(v CurrencyAmountType)`

SetUnitPrice sets UnitPrice field to given value.

### HasUnitPrice

`func (o *CateringEventResourceType) HasUnitPrice() bool`

HasUnitPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


