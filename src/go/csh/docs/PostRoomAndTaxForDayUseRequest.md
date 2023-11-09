# PostRoomAndTaxForDayUseRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomAndTaxForDayUseRequest

`func NewPostRoomAndTaxForDayUseRequest() *PostRoomAndTaxForDayUseRequest`

NewPostRoomAndTaxForDayUseRequest instantiates a new PostRoomAndTaxForDayUseRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomAndTaxForDayUseRequestWithDefaults

`func NewPostRoomAndTaxForDayUseRequestWithDefaults() *PostRoomAndTaxForDayUseRequest`

NewPostRoomAndTaxForDayUseRequestWithDefaults instantiates a new PostRoomAndTaxForDayUseRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *PostRoomAndTaxForDayUseRequest) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PostRoomAndTaxForDayUseRequest) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PostRoomAndTaxForDayUseRequest) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PostRoomAndTaxForDayUseRequest) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetReservationId

`func (o *PostRoomAndTaxForDayUseRequest) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostRoomAndTaxForDayUseRequest) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostRoomAndTaxForDayUseRequest) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostRoomAndTaxForDayUseRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomAndTaxForDayUseRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomAndTaxForDayUseRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomAndTaxForDayUseRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomAndTaxForDayUseRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


