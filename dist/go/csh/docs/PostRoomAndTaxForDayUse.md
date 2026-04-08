# PostRoomAndTaxForDayUse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRoomAndTaxForDayUse

`func NewPostRoomAndTaxForDayUse() *PostRoomAndTaxForDayUse`

NewPostRoomAndTaxForDayUse instantiates a new PostRoomAndTaxForDayUse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomAndTaxForDayUseWithDefaults

`func NewPostRoomAndTaxForDayUseWithDefaults() *PostRoomAndTaxForDayUse`

NewPostRoomAndTaxForDayUseWithDefaults instantiates a new PostRoomAndTaxForDayUse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *PostRoomAndTaxForDayUse) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *PostRoomAndTaxForDayUse) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *PostRoomAndTaxForDayUse) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *PostRoomAndTaxForDayUse) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetCashierId

`func (o *PostRoomAndTaxForDayUse) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PostRoomAndTaxForDayUse) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PostRoomAndTaxForDayUse) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PostRoomAndTaxForDayUse) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomAndTaxForDayUse) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomAndTaxForDayUse) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomAndTaxForDayUse) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomAndTaxForDayUse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


