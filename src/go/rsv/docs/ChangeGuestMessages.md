# ChangeGuestMessages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestMessages** | Pointer to [**GuestMessagesType**](GuestMessagesType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeGuestMessages

`func NewChangeGuestMessages() *ChangeGuestMessages`

NewChangeGuestMessages instantiates a new ChangeGuestMessages object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeGuestMessagesWithDefaults

`func NewChangeGuestMessagesWithDefaults() *ChangeGuestMessages`

NewChangeGuestMessagesWithDefaults instantiates a new ChangeGuestMessages object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestMessages

`func (o *ChangeGuestMessages) GetGuestMessages() GuestMessagesType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *ChangeGuestMessages) GetGuestMessagesOk() (*GuestMessagesType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *ChangeGuestMessages) SetGuestMessages(v GuestMessagesType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *ChangeGuestMessages) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangeGuestMessages) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeGuestMessages) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeGuestMessages) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeGuestMessages) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeGuestMessages) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeGuestMessages) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeGuestMessages) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeGuestMessages) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *ChangeGuestMessages) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ChangeGuestMessages) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ChangeGuestMessages) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ChangeGuestMessages) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeGuestMessages) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeGuestMessages) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeGuestMessages) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeGuestMessages) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


