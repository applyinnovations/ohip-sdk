# ChangeResvGuestMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**GuestMessages** | Pointer to [**[]ResvGuestMessageType**](ResvGuestMessageType.md) | Holds the Message Information | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeResvGuestMessages

`func NewChangeResvGuestMessages() *ChangeResvGuestMessages`

NewChangeResvGuestMessages instantiates a new ChangeResvGuestMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeResvGuestMessagesWithDefaults

`func NewChangeResvGuestMessagesWithDefaults() *ChangeResvGuestMessages`

NewChangeResvGuestMessagesWithDefaults instantiates a new ChangeResvGuestMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ChangeResvGuestMessages) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeResvGuestMessages) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeResvGuestMessages) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeResvGuestMessages) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetGuestMessages

`func (o *ChangeResvGuestMessages) GetGuestMessages() []ResvGuestMessageType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *ChangeResvGuestMessages) GetGuestMessagesOk() (*[]ResvGuestMessageType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *ChangeResvGuestMessages) SetGuestMessages(v []ResvGuestMessageType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *ChangeResvGuestMessages) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeResvGuestMessages) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeResvGuestMessages) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeResvGuestMessages) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeResvGuestMessages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeResvGuestMessages) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeResvGuestMessages) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeResvGuestMessages) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeResvGuestMessages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


