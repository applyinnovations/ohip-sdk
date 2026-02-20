# TicketsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Tickets** | Pointer to [**[]TicketType**](TicketType.md) | Collection of TicketType objects. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTicketsInfo

`func NewTicketsInfo() *TicketsInfo`

NewTicketsInfo instantiates a new TicketsInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketsInfoWithDefaults

`func NewTicketsInfoWithDefaults() *TicketsInfo`

NewTicketsInfoWithDefaults instantiates a new TicketsInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TicketsInfo) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TicketsInfo) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TicketsInfo) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TicketsInfo) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *TicketsInfo) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *TicketsInfo) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *TicketsInfo) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *TicketsInfo) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTickets

`func (o *TicketsInfo) GetTickets() []TicketType`

GetTickets returns the Tickets field if non-nil, zero value otherwise.

### GetTicketsOk

`func (o *TicketsInfo) GetTicketsOk() (*[]TicketType, bool)`

GetTicketsOk returns a tuple with the Tickets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTickets

`func (o *TicketsInfo) SetTickets(v []TicketType)`

SetTickets sets Tickets field to given value.

### HasTickets

`func (o *TicketsInfo) HasTickets() bool`

HasTickets returns a boolean if a field has been set.

### GetLinks

`func (o *TicketsInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TicketsInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TicketsInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TicketsInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TicketsInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TicketsInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TicketsInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TicketsInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


