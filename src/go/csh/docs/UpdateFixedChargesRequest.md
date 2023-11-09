# UpdateFixedChargesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FixedCharges** | Pointer to [**FixedChargesType**](FixedChargesType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewUpdateFixedChargesRequest

`func NewUpdateFixedChargesRequest() *UpdateFixedChargesRequest`

NewUpdateFixedChargesRequest instantiates a new UpdateFixedChargesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateFixedChargesRequestWithDefaults

`func NewUpdateFixedChargesRequestWithDefaults() *UpdateFixedChargesRequest`

NewUpdateFixedChargesRequestWithDefaults instantiates a new UpdateFixedChargesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFixedCharges

`func (o *UpdateFixedChargesRequest) GetFixedCharges() FixedChargesType`

GetFixedCharges returns the FixedCharges field if non-nil, zero value otherwise.

### GetFixedChargesOk

`func (o *UpdateFixedChargesRequest) GetFixedChargesOk() (*FixedChargesType, bool)`

GetFixedChargesOk returns a tuple with the FixedCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharges

`func (o *UpdateFixedChargesRequest) SetFixedCharges(v FixedChargesType)`

SetFixedCharges sets FixedCharges field to given value.

### HasFixedCharges

`func (o *UpdateFixedChargesRequest) HasFixedCharges() bool`

HasFixedCharges returns a boolean if a field has been set.

### GetHotelId

`func (o *UpdateFixedChargesRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *UpdateFixedChargesRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *UpdateFixedChargesRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *UpdateFixedChargesRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *UpdateFixedChargesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UpdateFixedChargesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UpdateFixedChargesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UpdateFixedChargesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *UpdateFixedChargesRequest) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *UpdateFixedChargesRequest) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *UpdateFixedChargesRequest) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *UpdateFixedChargesRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *UpdateFixedChargesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UpdateFixedChargesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UpdateFixedChargesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UpdateFixedChargesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


