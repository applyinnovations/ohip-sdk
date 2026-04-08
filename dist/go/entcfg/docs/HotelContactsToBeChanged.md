# HotelContactsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelContacts** | Pointer to [**[]HotelContactType**](HotelContactType.md) | Lists of contacts of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelContactsToBeChanged

`func NewHotelContactsToBeChanged() *HotelContactsToBeChanged`

NewHotelContactsToBeChanged instantiates a new HotelContactsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelContactsToBeChangedWithDefaults

`func NewHotelContactsToBeChangedWithDefaults() *HotelContactsToBeChanged`

NewHotelContactsToBeChangedWithDefaults instantiates a new HotelContactsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelContacts

`func (o *HotelContactsToBeChanged) GetHotelContacts() []HotelContactType`

GetHotelContacts returns the HotelContacts field if non-nil, zero value otherwise.

### GetHotelContactsOk

`func (o *HotelContactsToBeChanged) GetHotelContactsOk() (*[]HotelContactType, bool)`

GetHotelContactsOk returns a tuple with the HotelContacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelContacts

`func (o *HotelContactsToBeChanged) SetHotelContacts(v []HotelContactType)`

SetHotelContacts sets HotelContacts field to given value.

### HasHotelContacts

`func (o *HotelContactsToBeChanged) HasHotelContacts() bool`

HasHotelContacts returns a boolean if a field has been set.

### GetLinks

`func (o *HotelContactsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelContactsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelContactsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelContactsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelContactsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelContactsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelContactsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelContactsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


