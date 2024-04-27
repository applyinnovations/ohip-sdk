# MemberAwardDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to [**MemberAwardActionType**](MemberAwardActionType.md) |  | [optional] 
**ActualCancelPoints** | Pointer to **int32** | Actual number of cancel points. | [optional] 
**AwardBasedOn** | Pointer to **string** | Indicates if award is a Stay, Package Element or other. | [optional] 
**AwardCancellationNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AwardProductId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AwardType** | Pointer to **string** | The award type or code. | [optional] 
**AwardVoucherNo** | Pointer to **string** | Award Voucher Number. | [optional] 
**CancelPenaltyCharge** | Pointer to **int32** | Number points deducted if award is cancelled. | [optional] 
**CancelPenaltyDays** | Pointer to **int32** | Number days before arrival to apply penalty for cancellation. | [optional] 
**CancelPenaltyPoints** | Pointer to **int32** | Number of penalty points if cancelled. | [optional] 
**CancelPenaltyType** | Pointer to **string** | Type of cancel penalty like Points, etc. | [optional] 
**CancelPolicyType** | Pointer to **string** | Type of cancel policy. | [optional] 
**ExchangeRateType** | Pointer to **string** | Exchange Rate Type for the Currency Exchange. | [optional] 
**FromRoomType** | Pointer to **string** | Room type label before the upgrade in case of an upgrade award. | [optional] 
**Inactive** | Pointer to **bool** | If the award detail is inactive. | [optional] 
**NumberOfNights** | Pointer to **int32** | Number of nights cancel policy is applicable. | [optional] 
**PointsRequired** | Pointer to **int32** | Points required for the stay date. | [optional] 
**Product** | Pointer to **string** | Product code for which the award was issued, in case of a product award. | [optional] 
**RateCode** | Pointer to **string** | Rate code associated with the reservation. | [optional] 
**RedeemedCentralAmount** | Pointer to **float32** | Redeemed Central Amount on bill in External System Currency. | [optional] 
**RedeemedLocalAmount** | Pointer to **float32** | Redeemed Local Amount on bill in Hotel Currency. | [optional] 
**RoomType** | Pointer to **string** | Room type label associated with the reservation. | [optional] 
**StayDate** | Pointer to **string** | Date of stay. | [optional] 
**ToRoomType** | Pointer to **string** | Room type label after the upgrade for an upgrade award. | [optional] 
**TotalCentralAmount** | Pointer to **float32** | Total Central Amount on bill in External System Currency. | [optional] 
**TotalLocalAmount** | Pointer to **float32** | Total Local Amount on bill in Hotel Currency. | [optional] 
**TransactionCode** | Pointer to **string** | The Payment Transaction Code for which the Surcharge Applies. | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier. | [optional] 

## Methods

### NewMemberAwardDetailType

`func NewMemberAwardDetailType() *MemberAwardDetailType`

NewMemberAwardDetailType instantiates a new MemberAwardDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMemberAwardDetailTypeWithDefaults

`func NewMemberAwardDetailTypeWithDefaults() *MemberAwardDetailType`

NewMemberAwardDetailTypeWithDefaults instantiates a new MemberAwardDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *MemberAwardDetailType) GetActionType() MemberAwardActionType`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *MemberAwardDetailType) GetActionTypeOk() (*MemberAwardActionType, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *MemberAwardDetailType) SetActionType(v MemberAwardActionType)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *MemberAwardDetailType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetActualCancelPoints

`func (o *MemberAwardDetailType) GetActualCancelPoints() int32`

GetActualCancelPoints returns the ActualCancelPoints field if non-nil, zero value otherwise.

### GetActualCancelPointsOk

`func (o *MemberAwardDetailType) GetActualCancelPointsOk() (*int32, bool)`

GetActualCancelPointsOk returns a tuple with the ActualCancelPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualCancelPoints

`func (o *MemberAwardDetailType) SetActualCancelPoints(v int32)`

SetActualCancelPoints sets ActualCancelPoints field to given value.

### HasActualCancelPoints

`func (o *MemberAwardDetailType) HasActualCancelPoints() bool`

HasActualCancelPoints returns a boolean if a field has been set.

### GetAwardBasedOn

`func (o *MemberAwardDetailType) GetAwardBasedOn() string`

GetAwardBasedOn returns the AwardBasedOn field if non-nil, zero value otherwise.

### GetAwardBasedOnOk

`func (o *MemberAwardDetailType) GetAwardBasedOnOk() (*string, bool)`

GetAwardBasedOnOk returns a tuple with the AwardBasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardBasedOn

`func (o *MemberAwardDetailType) SetAwardBasedOn(v string)`

SetAwardBasedOn sets AwardBasedOn field to given value.

### HasAwardBasedOn

`func (o *MemberAwardDetailType) HasAwardBasedOn() bool`

HasAwardBasedOn returns a boolean if a field has been set.

### GetAwardCancellationNo

`func (o *MemberAwardDetailType) GetAwardCancellationNo() UniqueIDType`

GetAwardCancellationNo returns the AwardCancellationNo field if non-nil, zero value otherwise.

### GetAwardCancellationNoOk

`func (o *MemberAwardDetailType) GetAwardCancellationNoOk() (*UniqueIDType, bool)`

GetAwardCancellationNoOk returns a tuple with the AwardCancellationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCancellationNo

`func (o *MemberAwardDetailType) SetAwardCancellationNo(v UniqueIDType)`

SetAwardCancellationNo sets AwardCancellationNo field to given value.

### HasAwardCancellationNo

`func (o *MemberAwardDetailType) HasAwardCancellationNo() bool`

HasAwardCancellationNo returns a boolean if a field has been set.

### GetAwardProductId

`func (o *MemberAwardDetailType) GetAwardProductId() UniqueIDType`

GetAwardProductId returns the AwardProductId field if non-nil, zero value otherwise.

### GetAwardProductIdOk

`func (o *MemberAwardDetailType) GetAwardProductIdOk() (*UniqueIDType, bool)`

GetAwardProductIdOk returns a tuple with the AwardProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardProductId

`func (o *MemberAwardDetailType) SetAwardProductId(v UniqueIDType)`

SetAwardProductId sets AwardProductId field to given value.

### HasAwardProductId

`func (o *MemberAwardDetailType) HasAwardProductId() bool`

HasAwardProductId returns a boolean if a field has been set.

### GetAwardType

`func (o *MemberAwardDetailType) GetAwardType() string`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *MemberAwardDetailType) GetAwardTypeOk() (*string, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *MemberAwardDetailType) SetAwardType(v string)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *MemberAwardDetailType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetAwardVoucherNo

`func (o *MemberAwardDetailType) GetAwardVoucherNo() string`

GetAwardVoucherNo returns the AwardVoucherNo field if non-nil, zero value otherwise.

### GetAwardVoucherNoOk

`func (o *MemberAwardDetailType) GetAwardVoucherNoOk() (*string, bool)`

GetAwardVoucherNoOk returns a tuple with the AwardVoucherNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardVoucherNo

`func (o *MemberAwardDetailType) SetAwardVoucherNo(v string)`

SetAwardVoucherNo sets AwardVoucherNo field to given value.

### HasAwardVoucherNo

`func (o *MemberAwardDetailType) HasAwardVoucherNo() bool`

HasAwardVoucherNo returns a boolean if a field has been set.

### GetCancelPenaltyCharge

`func (o *MemberAwardDetailType) GetCancelPenaltyCharge() int32`

GetCancelPenaltyCharge returns the CancelPenaltyCharge field if non-nil, zero value otherwise.

### GetCancelPenaltyChargeOk

`func (o *MemberAwardDetailType) GetCancelPenaltyChargeOk() (*int32, bool)`

GetCancelPenaltyChargeOk returns a tuple with the CancelPenaltyCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyCharge

`func (o *MemberAwardDetailType) SetCancelPenaltyCharge(v int32)`

SetCancelPenaltyCharge sets CancelPenaltyCharge field to given value.

### HasCancelPenaltyCharge

`func (o *MemberAwardDetailType) HasCancelPenaltyCharge() bool`

HasCancelPenaltyCharge returns a boolean if a field has been set.

### GetCancelPenaltyDays

`func (o *MemberAwardDetailType) GetCancelPenaltyDays() int32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *MemberAwardDetailType) GetCancelPenaltyDaysOk() (*int32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *MemberAwardDetailType) SetCancelPenaltyDays(v int32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *MemberAwardDetailType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *MemberAwardDetailType) GetCancelPenaltyPoints() int32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *MemberAwardDetailType) GetCancelPenaltyPointsOk() (*int32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *MemberAwardDetailType) SetCancelPenaltyPoints(v int32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *MemberAwardDetailType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetCancelPenaltyType

`func (o *MemberAwardDetailType) GetCancelPenaltyType() string`

GetCancelPenaltyType returns the CancelPenaltyType field if non-nil, zero value otherwise.

### GetCancelPenaltyTypeOk

`func (o *MemberAwardDetailType) GetCancelPenaltyTypeOk() (*string, bool)`

GetCancelPenaltyTypeOk returns a tuple with the CancelPenaltyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyType

`func (o *MemberAwardDetailType) SetCancelPenaltyType(v string)`

SetCancelPenaltyType sets CancelPenaltyType field to given value.

### HasCancelPenaltyType

`func (o *MemberAwardDetailType) HasCancelPenaltyType() bool`

HasCancelPenaltyType returns a boolean if a field has been set.

### GetCancelPolicyType

`func (o *MemberAwardDetailType) GetCancelPolicyType() string`

GetCancelPolicyType returns the CancelPolicyType field if non-nil, zero value otherwise.

### GetCancelPolicyTypeOk

`func (o *MemberAwardDetailType) GetCancelPolicyTypeOk() (*string, bool)`

GetCancelPolicyTypeOk returns a tuple with the CancelPolicyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPolicyType

`func (o *MemberAwardDetailType) SetCancelPolicyType(v string)`

SetCancelPolicyType sets CancelPolicyType field to given value.

### HasCancelPolicyType

`func (o *MemberAwardDetailType) HasCancelPolicyType() bool`

HasCancelPolicyType returns a boolean if a field has been set.

### GetExchangeRateType

`func (o *MemberAwardDetailType) GetExchangeRateType() string`

GetExchangeRateType returns the ExchangeRateType field if non-nil, zero value otherwise.

### GetExchangeRateTypeOk

`func (o *MemberAwardDetailType) GetExchangeRateTypeOk() (*string, bool)`

GetExchangeRateTypeOk returns a tuple with the ExchangeRateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRateType

`func (o *MemberAwardDetailType) SetExchangeRateType(v string)`

SetExchangeRateType sets ExchangeRateType field to given value.

### HasExchangeRateType

`func (o *MemberAwardDetailType) HasExchangeRateType() bool`

HasExchangeRateType returns a boolean if a field has been set.

### GetFromRoomType

`func (o *MemberAwardDetailType) GetFromRoomType() string`

GetFromRoomType returns the FromRoomType field if non-nil, zero value otherwise.

### GetFromRoomTypeOk

`func (o *MemberAwardDetailType) GetFromRoomTypeOk() (*string, bool)`

GetFromRoomTypeOk returns a tuple with the FromRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRoomType

`func (o *MemberAwardDetailType) SetFromRoomType(v string)`

SetFromRoomType sets FromRoomType field to given value.

### HasFromRoomType

`func (o *MemberAwardDetailType) HasFromRoomType() bool`

HasFromRoomType returns a boolean if a field has been set.

### GetInactive

`func (o *MemberAwardDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MemberAwardDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MemberAwardDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MemberAwardDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetNumberOfNights

`func (o *MemberAwardDetailType) GetNumberOfNights() int32`

GetNumberOfNights returns the NumberOfNights field if non-nil, zero value otherwise.

### GetNumberOfNightsOk

`func (o *MemberAwardDetailType) GetNumberOfNightsOk() (*int32, bool)`

GetNumberOfNightsOk returns a tuple with the NumberOfNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfNights

`func (o *MemberAwardDetailType) SetNumberOfNights(v int32)`

SetNumberOfNights sets NumberOfNights field to given value.

### HasNumberOfNights

`func (o *MemberAwardDetailType) HasNumberOfNights() bool`

HasNumberOfNights returns a boolean if a field has been set.

### GetPointsRequired

`func (o *MemberAwardDetailType) GetPointsRequired() int32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *MemberAwardDetailType) GetPointsRequiredOk() (*int32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *MemberAwardDetailType) SetPointsRequired(v int32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *MemberAwardDetailType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetProduct

`func (o *MemberAwardDetailType) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *MemberAwardDetailType) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *MemberAwardDetailType) SetProduct(v string)`

SetProduct sets Product field to given value.

### HasProduct

`func (o *MemberAwardDetailType) HasProduct() bool`

HasProduct returns a boolean if a field has been set.

### GetRateCode

`func (o *MemberAwardDetailType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *MemberAwardDetailType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *MemberAwardDetailType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *MemberAwardDetailType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetRedeemedCentralAmount

`func (o *MemberAwardDetailType) GetRedeemedCentralAmount() float32`

GetRedeemedCentralAmount returns the RedeemedCentralAmount field if non-nil, zero value otherwise.

### GetRedeemedCentralAmountOk

`func (o *MemberAwardDetailType) GetRedeemedCentralAmountOk() (*float32, bool)`

GetRedeemedCentralAmountOk returns a tuple with the RedeemedCentralAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedeemedCentralAmount

`func (o *MemberAwardDetailType) SetRedeemedCentralAmount(v float32)`

SetRedeemedCentralAmount sets RedeemedCentralAmount field to given value.

### HasRedeemedCentralAmount

`func (o *MemberAwardDetailType) HasRedeemedCentralAmount() bool`

HasRedeemedCentralAmount returns a boolean if a field has been set.

### GetRedeemedLocalAmount

`func (o *MemberAwardDetailType) GetRedeemedLocalAmount() float32`

GetRedeemedLocalAmount returns the RedeemedLocalAmount field if non-nil, zero value otherwise.

### GetRedeemedLocalAmountOk

`func (o *MemberAwardDetailType) GetRedeemedLocalAmountOk() (*float32, bool)`

GetRedeemedLocalAmountOk returns a tuple with the RedeemedLocalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedeemedLocalAmount

`func (o *MemberAwardDetailType) SetRedeemedLocalAmount(v float32)`

SetRedeemedLocalAmount sets RedeemedLocalAmount field to given value.

### HasRedeemedLocalAmount

`func (o *MemberAwardDetailType) HasRedeemedLocalAmount() bool`

HasRedeemedLocalAmount returns a boolean if a field has been set.

### GetRoomType

`func (o *MemberAwardDetailType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *MemberAwardDetailType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *MemberAwardDetailType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *MemberAwardDetailType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetStayDate

`func (o *MemberAwardDetailType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *MemberAwardDetailType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *MemberAwardDetailType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *MemberAwardDetailType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.

### GetToRoomType

`func (o *MemberAwardDetailType) GetToRoomType() string`

GetToRoomType returns the ToRoomType field if non-nil, zero value otherwise.

### GetToRoomTypeOk

`func (o *MemberAwardDetailType) GetToRoomTypeOk() (*string, bool)`

GetToRoomTypeOk returns a tuple with the ToRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRoomType

`func (o *MemberAwardDetailType) SetToRoomType(v string)`

SetToRoomType sets ToRoomType field to given value.

### HasToRoomType

`func (o *MemberAwardDetailType) HasToRoomType() bool`

HasToRoomType returns a boolean if a field has been set.

### GetTotalCentralAmount

`func (o *MemberAwardDetailType) GetTotalCentralAmount() float32`

GetTotalCentralAmount returns the TotalCentralAmount field if non-nil, zero value otherwise.

### GetTotalCentralAmountOk

`func (o *MemberAwardDetailType) GetTotalCentralAmountOk() (*float32, bool)`

GetTotalCentralAmountOk returns a tuple with the TotalCentralAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCentralAmount

`func (o *MemberAwardDetailType) SetTotalCentralAmount(v float32)`

SetTotalCentralAmount sets TotalCentralAmount field to given value.

### HasTotalCentralAmount

`func (o *MemberAwardDetailType) HasTotalCentralAmount() bool`

HasTotalCentralAmount returns a boolean if a field has been set.

### GetTotalLocalAmount

`func (o *MemberAwardDetailType) GetTotalLocalAmount() float32`

GetTotalLocalAmount returns the TotalLocalAmount field if non-nil, zero value otherwise.

### GetTotalLocalAmountOk

`func (o *MemberAwardDetailType) GetTotalLocalAmountOk() (*float32, bool)`

GetTotalLocalAmountOk returns a tuple with the TotalLocalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalLocalAmount

`func (o *MemberAwardDetailType) SetTotalLocalAmount(v float32)`

SetTotalLocalAmount sets TotalLocalAmount field to given value.

### HasTotalLocalAmount

`func (o *MemberAwardDetailType) HasTotalLocalAmount() bool`

HasTotalLocalAmount returns a boolean if a field has been set.

### GetTransactionCode

`func (o *MemberAwardDetailType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *MemberAwardDetailType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *MemberAwardDetailType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *MemberAwardDetailType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionNo

`func (o *MemberAwardDetailType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *MemberAwardDetailType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *MemberAwardDetailType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *MemberAwardDetailType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


