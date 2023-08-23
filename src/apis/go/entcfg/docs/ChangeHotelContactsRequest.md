# ChangeHotelContactsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelContacts** | Pointer to [**[]HotelContactType**](HotelContactType.md) | Lists of contacts of the hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeHotelContactsRequest

`func NewChangeHotelContactsRequest() *ChangeHotelContactsRequest`

NewChangeHotelContactsRequest instantiates a new ChangeHotelContactsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeHotelContactsRequestWithDefaults

`func NewChangeHotelContactsRequestWithDefaults() *ChangeHotelContactsRequest`

NewChangeHotelContactsRequestWithDefaults instantiates a new ChangeHotelContactsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelContacts

`func (o *ChangeHotelContactsRequest) GetHotelContacts() []HotelContactType`

GetHotelContacts returns the HotelContacts field if non-nil, zero value otherwise.

### GetHotelContactsOk

`func (o *ChangeHotelContactsRequest) GetHotelContactsOk() (*[]HotelContactType, bool)`

GetHotelContactsOk returns a tuple with the HotelContacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelContacts

`func (o *ChangeHotelContactsRequest) SetHotelContacts(v []HotelContactType)`

SetHotelContacts sets HotelContacts field to given value.

### HasHotelContacts

`func (o *ChangeHotelContactsRequest) HasHotelContacts() bool`

HasHotelContacts returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeHotelContactsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeHotelContactsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeHotelContactsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeHotelContactsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeHotelContactsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeHotelContactsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeHotelContactsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeHotelContactsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


