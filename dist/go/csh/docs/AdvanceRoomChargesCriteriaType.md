# AdvanceRoomChargesCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**EndDateToCharge** | Pointer to **string** | Indicates the last date until which the Advance Room Charges have to be posted. | [optional] 
**EventType** | Pointer to [**CashieringEventType**](CashieringEventType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**PostForEntireStay** | Pointer to **bool** | Indicates if the posting of room charges have to be done for the entire stay. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**VerifyOnly** | Pointer to **bool** | Flag to indicate if only a verification is required. This checks if advance bills have been generated for this reservation and returns the last date in the response. Setting this flag to true, will return the information for the below elements in the response: AvailablePostingDates, GeneratedForEntireStay, LastRoomAndTaxPostedDate and the Reservation Information. No posting will be done. In order for the actual posting to occur this flag should be false. | [optional] 

## Methods

### NewAdvanceRoomChargesCriteriaType

`func NewAdvanceRoomChargesCriteriaType() *AdvanceRoomChargesCriteriaType`

NewAdvanceRoomChargesCriteriaType instantiates a new AdvanceRoomChargesCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvanceRoomChargesCriteriaTypeWithDefaults

`func NewAdvanceRoomChargesCriteriaTypeWithDefaults() *AdvanceRoomChargesCriteriaType`

NewAdvanceRoomChargesCriteriaTypeWithDefaults instantiates a new AdvanceRoomChargesCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *AdvanceRoomChargesCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *AdvanceRoomChargesCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *AdvanceRoomChargesCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *AdvanceRoomChargesCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetEndDateToCharge

`func (o *AdvanceRoomChargesCriteriaType) GetEndDateToCharge() string`

GetEndDateToCharge returns the EndDateToCharge field if non-nil, zero value otherwise.

### GetEndDateToChargeOk

`func (o *AdvanceRoomChargesCriteriaType) GetEndDateToChargeOk() (*string, bool)`

GetEndDateToChargeOk returns a tuple with the EndDateToCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDateToCharge

`func (o *AdvanceRoomChargesCriteriaType) SetEndDateToCharge(v string)`

SetEndDateToCharge sets EndDateToCharge field to given value.

### HasEndDateToCharge

`func (o *AdvanceRoomChargesCriteriaType) HasEndDateToCharge() bool`

HasEndDateToCharge returns a boolean if a field has been set.

### GetEventType

`func (o *AdvanceRoomChargesCriteriaType) GetEventType() CashieringEventType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AdvanceRoomChargesCriteriaType) GetEventTypeOk() (*CashieringEventType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AdvanceRoomChargesCriteriaType) SetEventType(v CashieringEventType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AdvanceRoomChargesCriteriaType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetHotelId

`func (o *AdvanceRoomChargesCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AdvanceRoomChargesCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AdvanceRoomChargesCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AdvanceRoomChargesCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPostForEntireStay

`func (o *AdvanceRoomChargesCriteriaType) GetPostForEntireStay() bool`

GetPostForEntireStay returns the PostForEntireStay field if non-nil, zero value otherwise.

### GetPostForEntireStayOk

`func (o *AdvanceRoomChargesCriteriaType) GetPostForEntireStayOk() (*bool, bool)`

GetPostForEntireStayOk returns a tuple with the PostForEntireStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostForEntireStay

`func (o *AdvanceRoomChargesCriteriaType) SetPostForEntireStay(v bool)`

SetPostForEntireStay sets PostForEntireStay field to given value.

### HasPostForEntireStay

`func (o *AdvanceRoomChargesCriteriaType) HasPostForEntireStay() bool`

HasPostForEntireStay returns a boolean if a field has been set.

### GetReservationIdList

`func (o *AdvanceRoomChargesCriteriaType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *AdvanceRoomChargesCriteriaType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *AdvanceRoomChargesCriteriaType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *AdvanceRoomChargesCriteriaType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetVerifyOnly

`func (o *AdvanceRoomChargesCriteriaType) GetVerifyOnly() bool`

GetVerifyOnly returns the VerifyOnly field if non-nil, zero value otherwise.

### GetVerifyOnlyOk

`func (o *AdvanceRoomChargesCriteriaType) GetVerifyOnlyOk() (*bool, bool)`

GetVerifyOnlyOk returns a tuple with the VerifyOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerifyOnly

`func (o *AdvanceRoomChargesCriteriaType) SetVerifyOnly(v bool)`

SetVerifyOnly sets VerifyOnly field to given value.

### HasVerifyOnly

`func (o *AdvanceRoomChargesCriteriaType) HasVerifyOnly() bool`

HasVerifyOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


