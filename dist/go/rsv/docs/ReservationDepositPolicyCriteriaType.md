# ReservationDepositPolicyCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountDue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountPaid** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Comments** | Pointer to **string** | Comments attached with a deposit. | [optional] 
**HotelId** | Pointer to **string** | Property where the reservation exists. | [optional] 
**Policy** | Pointer to [**DepositPolicyType**](DepositPolicyType.md) |  | [optional] 
**PolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RevenueType** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 

## Methods

### NewReservationDepositPolicyCriteriaType

`func NewReservationDepositPolicyCriteriaType() *ReservationDepositPolicyCriteriaType`

NewReservationDepositPolicyCriteriaType instantiates a new ReservationDepositPolicyCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDepositPolicyCriteriaTypeWithDefaults

`func NewReservationDepositPolicyCriteriaTypeWithDefaults() *ReservationDepositPolicyCriteriaType`

NewReservationDepositPolicyCriteriaTypeWithDefaults instantiates a new ReservationDepositPolicyCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountDue

`func (o *ReservationDepositPolicyCriteriaType) GetAmountDue() CurrencyAmountType`

GetAmountDue returns the AmountDue field if non-nil, zero value otherwise.

### GetAmountDueOk

`func (o *ReservationDepositPolicyCriteriaType) GetAmountDueOk() (*CurrencyAmountType, bool)`

GetAmountDueOk returns a tuple with the AmountDue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountDue

`func (o *ReservationDepositPolicyCriteriaType) SetAmountDue(v CurrencyAmountType)`

SetAmountDue sets AmountDue field to given value.

### HasAmountDue

`func (o *ReservationDepositPolicyCriteriaType) HasAmountDue() bool`

HasAmountDue returns a boolean if a field has been set.

### GetAmountPaid

`func (o *ReservationDepositPolicyCriteriaType) GetAmountPaid() CurrencyAmountType`

GetAmountPaid returns the AmountPaid field if non-nil, zero value otherwise.

### GetAmountPaidOk

`func (o *ReservationDepositPolicyCriteriaType) GetAmountPaidOk() (*CurrencyAmountType, bool)`

GetAmountPaidOk returns a tuple with the AmountPaid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPaid

`func (o *ReservationDepositPolicyCriteriaType) SetAmountPaid(v CurrencyAmountType)`

SetAmountPaid sets AmountPaid field to given value.

### HasAmountPaid

`func (o *ReservationDepositPolicyCriteriaType) HasAmountPaid() bool`

HasAmountPaid returns a boolean if a field has been set.

### GetComments

`func (o *ReservationDepositPolicyCriteriaType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ReservationDepositPolicyCriteriaType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ReservationDepositPolicyCriteriaType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ReservationDepositPolicyCriteriaType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationDepositPolicyCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationDepositPolicyCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationDepositPolicyCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationDepositPolicyCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPolicy

`func (o *ReservationDepositPolicyCriteriaType) GetPolicy() DepositPolicyType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *ReservationDepositPolicyCriteriaType) GetPolicyOk() (*DepositPolicyType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *ReservationDepositPolicyCriteriaType) SetPolicy(v DepositPolicyType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *ReservationDepositPolicyCriteriaType) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetPolicyId

`func (o *ReservationDepositPolicyCriteriaType) GetPolicyId() UniqueIDType`

GetPolicyId returns the PolicyId field if non-nil, zero value otherwise.

### GetPolicyIdOk

`func (o *ReservationDepositPolicyCriteriaType) GetPolicyIdOk() (*UniqueIDType, bool)`

GetPolicyIdOk returns a tuple with the PolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyId

`func (o *ReservationDepositPolicyCriteriaType) SetPolicyId(v UniqueIDType)`

SetPolicyId sets PolicyId field to given value.

### HasPolicyId

`func (o *ReservationDepositPolicyCriteriaType) HasPolicyId() bool`

HasPolicyId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationDepositPolicyCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationDepositPolicyCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationDepositPolicyCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationDepositPolicyCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRevenueType

`func (o *ReservationDepositPolicyCriteriaType) GetRevenueType() DepositCancelRevenueType`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *ReservationDepositPolicyCriteriaType) GetRevenueTypeOk() (*DepositCancelRevenueType, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *ReservationDepositPolicyCriteriaType) SetRevenueType(v DepositCancelRevenueType)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *ReservationDepositPolicyCriteriaType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


