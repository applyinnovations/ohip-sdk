# PayeeSharerInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code of the reservation. | [optional] 
**PayeeSharer** | Pointer to **bool** | This attribute indicates if the Shared reservation is marked as the Payee Sharer or not. | [optional] 

## Methods

### NewPayeeSharerInfoType

`func NewPayeeSharerInfoType() *PayeeSharerInfoType`

NewPayeeSharerInfoType instantiates a new PayeeSharerInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPayeeSharerInfoTypeWithDefaults

`func NewPayeeSharerInfoTypeWithDefaults() *PayeeSharerInfoType`

NewPayeeSharerInfoTypeWithDefaults instantiates a new PayeeSharerInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *PayeeSharerInfoType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PayeeSharerInfoType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PayeeSharerInfoType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PayeeSharerInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetHotelId

`func (o *PayeeSharerInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PayeeSharerInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PayeeSharerInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PayeeSharerInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPayeeSharer

`func (o *PayeeSharerInfoType) GetPayeeSharer() bool`

GetPayeeSharer returns the PayeeSharer field if non-nil, zero value otherwise.

### GetPayeeSharerOk

`func (o *PayeeSharerInfoType) GetPayeeSharerOk() (*bool, bool)`

GetPayeeSharerOk returns a tuple with the PayeeSharer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeSharer

`func (o *PayeeSharerInfoType) SetPayeeSharer(v bool)`

SetPayeeSharer sets PayeeSharer field to given value.

### HasPayeeSharer

`func (o *PayeeSharerInfoType) HasPayeeSharer() bool`

HasPayeeSharer returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


