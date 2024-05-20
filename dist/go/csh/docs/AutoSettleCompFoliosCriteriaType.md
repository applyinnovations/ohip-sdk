# AutoSettleCompFoliosCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | Numeric ID of the cashier. | [optional] 
**EventType** | Pointer to [**CashieringEventType**](CashieringEventType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the folios to be auto settled. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewAutoSettleCompFoliosCriteriaType

`func NewAutoSettleCompFoliosCriteriaType() *AutoSettleCompFoliosCriteriaType`

NewAutoSettleCompFoliosCriteriaType instantiates a new AutoSettleCompFoliosCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoSettleCompFoliosCriteriaTypeWithDefaults

`func NewAutoSettleCompFoliosCriteriaTypeWithDefaults() *AutoSettleCompFoliosCriteriaType`

NewAutoSettleCompFoliosCriteriaTypeWithDefaults instantiates a new AutoSettleCompFoliosCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *AutoSettleCompFoliosCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *AutoSettleCompFoliosCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *AutoSettleCompFoliosCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *AutoSettleCompFoliosCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetEventType

`func (o *AutoSettleCompFoliosCriteriaType) GetEventType() CashieringEventType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AutoSettleCompFoliosCriteriaType) GetEventTypeOk() (*CashieringEventType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AutoSettleCompFoliosCriteriaType) SetEventType(v CashieringEventType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AutoSettleCompFoliosCriteriaType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetHotelId

`func (o *AutoSettleCompFoliosCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AutoSettleCompFoliosCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AutoSettleCompFoliosCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AutoSettleCompFoliosCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *AutoSettleCompFoliosCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *AutoSettleCompFoliosCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *AutoSettleCompFoliosCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *AutoSettleCompFoliosCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


