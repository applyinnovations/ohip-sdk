# PutGuestMessagesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestMessages** | Pointer to [**GuestMessagesType**](GuestMessagesType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutGuestMessagesRequest

`func NewPutGuestMessagesRequest() *PutGuestMessagesRequest`

NewPutGuestMessagesRequest instantiates a new PutGuestMessagesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutGuestMessagesRequestWithDefaults

`func NewPutGuestMessagesRequestWithDefaults() *PutGuestMessagesRequest`

NewPutGuestMessagesRequestWithDefaults instantiates a new PutGuestMessagesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestMessages

`func (o *PutGuestMessagesRequest) GetGuestMessages() GuestMessagesType`

GetGuestMessages returns the GuestMessages field if non-nil, zero value otherwise.

### GetGuestMessagesOk

`func (o *PutGuestMessagesRequest) GetGuestMessagesOk() (*GuestMessagesType, bool)`

GetGuestMessagesOk returns a tuple with the GuestMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestMessages

`func (o *PutGuestMessagesRequest) SetGuestMessages(v GuestMessagesType)`

SetGuestMessages sets GuestMessages field to given value.

### HasGuestMessages

`func (o *PutGuestMessagesRequest) HasGuestMessages() bool`

HasGuestMessages returns a boolean if a field has been set.

### GetHotelId

`func (o *PutGuestMessagesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutGuestMessagesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutGuestMessagesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutGuestMessagesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutGuestMessagesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutGuestMessagesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutGuestMessagesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutGuestMessagesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *PutGuestMessagesRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PutGuestMessagesRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PutGuestMessagesRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PutGuestMessagesRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *PutGuestMessagesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutGuestMessagesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutGuestMessagesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutGuestMessagesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


