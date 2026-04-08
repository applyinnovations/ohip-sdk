# CashOutPrepaidCardCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**CardNo** | Pointer to **string** | Prepaid card number. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Pin** | Pointer to **string** | PIN code associated for the prepaid card. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**PostChargeToRoom** | Pointer to **bool** | Indicate that charges will be posted to the room. | [optional] 
**SaleCriteria** | Pointer to [**SaleCriteriaType**](SaleCriteriaType.md) |  | [optional] 

## Methods

### NewCashOutPrepaidCardCriteria

`func NewCashOutPrepaidCardCriteria() *CashOutPrepaidCardCriteria`

NewCashOutPrepaidCardCriteria instantiates a new CashOutPrepaidCardCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashOutPrepaidCardCriteriaWithDefaults

`func NewCashOutPrepaidCardCriteriaWithDefaults() *CashOutPrepaidCardCriteria`

NewCashOutPrepaidCardCriteriaWithDefaults instantiates a new CashOutPrepaidCardCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CashOutPrepaidCardCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CashOutPrepaidCardCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CashOutPrepaidCardCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CashOutPrepaidCardCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCardNo

`func (o *CashOutPrepaidCardCriteria) GetCardNo() string`

GetCardNo returns the CardNo field if non-nil, zero value otherwise.

### GetCardNoOk

`func (o *CashOutPrepaidCardCriteria) GetCardNoOk() (*string, bool)`

GetCardNoOk returns a tuple with the CardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNo

`func (o *CashOutPrepaidCardCriteria) SetCardNo(v string)`

SetCardNo sets CardNo field to given value.

### HasCardNo

`func (o *CashOutPrepaidCardCriteria) HasCardNo() bool`

HasCardNo returns a boolean if a field has been set.

### GetInterfaceId

`func (o *CashOutPrepaidCardCriteria) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *CashOutPrepaidCardCriteria) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *CashOutPrepaidCardCriteria) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *CashOutPrepaidCardCriteria) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetProfileId

`func (o *CashOutPrepaidCardCriteria) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *CashOutPrepaidCardCriteria) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *CashOutPrepaidCardCriteria) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *CashOutPrepaidCardCriteria) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReservationId

`func (o *CashOutPrepaidCardCriteria) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CashOutPrepaidCardCriteria) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CashOutPrepaidCardCriteria) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CashOutPrepaidCardCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetPin

`func (o *CashOutPrepaidCardCriteria) GetPin() string`

GetPin returns the Pin field if non-nil, zero value otherwise.

### GetPinOk

`func (o *CashOutPrepaidCardCriteria) GetPinOk() (*string, bool)`

GetPinOk returns a tuple with the Pin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPin

`func (o *CashOutPrepaidCardCriteria) SetPin(v string)`

SetPin sets Pin field to given value.

### HasPin

`func (o *CashOutPrepaidCardCriteria) HasPin() bool`

HasPin returns a boolean if a field has been set.

### GetAmount

`func (o *CashOutPrepaidCardCriteria) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *CashOutPrepaidCardCriteria) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *CashOutPrepaidCardCriteria) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *CashOutPrepaidCardCriteria) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCashierId

`func (o *CashOutPrepaidCardCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *CashOutPrepaidCardCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *CashOutPrepaidCardCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *CashOutPrepaidCardCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetPostChargeToRoom

`func (o *CashOutPrepaidCardCriteria) GetPostChargeToRoom() bool`

GetPostChargeToRoom returns the PostChargeToRoom field if non-nil, zero value otherwise.

### GetPostChargeToRoomOk

`func (o *CashOutPrepaidCardCriteria) GetPostChargeToRoomOk() (*bool, bool)`

GetPostChargeToRoomOk returns a tuple with the PostChargeToRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostChargeToRoom

`func (o *CashOutPrepaidCardCriteria) SetPostChargeToRoom(v bool)`

SetPostChargeToRoom sets PostChargeToRoom field to given value.

### HasPostChargeToRoom

`func (o *CashOutPrepaidCardCriteria) HasPostChargeToRoom() bool`

HasPostChargeToRoom returns a boolean if a field has been set.

### GetSaleCriteria

`func (o *CashOutPrepaidCardCriteria) GetSaleCriteria() SaleCriteriaType`

GetSaleCriteria returns the SaleCriteria field if non-nil, zero value otherwise.

### GetSaleCriteriaOk

`func (o *CashOutPrepaidCardCriteria) GetSaleCriteriaOk() (*SaleCriteriaType, bool)`

GetSaleCriteriaOk returns a tuple with the SaleCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaleCriteria

`func (o *CashOutPrepaidCardCriteria) SetSaleCriteria(v SaleCriteriaType)`

SetSaleCriteria sets SaleCriteria field to given value.

### HasSaleCriteria

`func (o *CashOutPrepaidCardCriteria) HasSaleCriteria() bool`

HasSaleCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


