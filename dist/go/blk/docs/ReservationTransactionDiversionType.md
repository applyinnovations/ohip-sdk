# ReservationTransactionDiversionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Transaction Diversion Code | [optional] 
**DailyDetails** | Pointer to [**[]TransactionDiversionDailyDetailType**](TransactionDiversionDailyDetailType.md) | List of daily details for Transaction Diversion rule. | [optional] 
**Description** | Pointer to **string** | User defined message for the Transaction Diversion Rule. | [optional] 
**DisplaySequence** | Pointer to **float32** | User configured Sequence number. | [optional] 
**Diverted** | Pointer to **int32** | Transaction diversions that are diverted . | [optional] 
**HotelId** | Pointer to **string** | Hotel code with which Transaction Diversion Rule is associated. | [optional] 
**Inactive** | Pointer to **bool** | Indicator that tells whether the transaction diversion rule is active or not. | [optional] 
**Level** | Pointer to [**TransactionDiversionRuleLevelType**](TransactionDiversionRuleLevelType.md) |  | [optional] 
**Membership** | Pointer to [**MembershipTypeLevelType**](MembershipTypeLevelType.md) |  | [optional] 
**Notes** | Pointer to [**CommentInfoType**](CommentInfoType.md) |  | [optional] 
**Posted** | Pointer to **int32** | Transaction diversions that are posted. | [optional] 
**TargetRoom** | Pointer to **string** | Room number to receive all the diverted transactions configured for this instruction. | [optional] 
**Thresholds** | Pointer to [**ThresholdDetailsType**](ThresholdDetailsType.md) |  | [optional] 
**TransactionCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Collection of Transaction Code List | [optional] 
**Type** | Pointer to [**TransactionDiversionRuleTypeType**](TransactionDiversionRuleTypeType.md) |  | [optional] 
**VipCode** | Pointer to **string** | VIP code to consider while applying Diversion Instruction. | [optional] 

## Methods

### NewReservationTransactionDiversionType

`func NewReservationTransactionDiversionType() *ReservationTransactionDiversionType`

NewReservationTransactionDiversionType instantiates a new ReservationTransactionDiversionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationTransactionDiversionTypeWithDefaults

`func NewReservationTransactionDiversionTypeWithDefaults() *ReservationTransactionDiversionType`

NewReservationTransactionDiversionTypeWithDefaults instantiates a new ReservationTransactionDiversionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ReservationTransactionDiversionType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ReservationTransactionDiversionType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ReservationTransactionDiversionType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ReservationTransactionDiversionType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDailyDetails

`func (o *ReservationTransactionDiversionType) GetDailyDetails() []TransactionDiversionDailyDetailType`

GetDailyDetails returns the DailyDetails field if non-nil, zero value otherwise.

### GetDailyDetailsOk

`func (o *ReservationTransactionDiversionType) GetDailyDetailsOk() (*[]TransactionDiversionDailyDetailType, bool)`

GetDailyDetailsOk returns a tuple with the DailyDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyDetails

`func (o *ReservationTransactionDiversionType) SetDailyDetails(v []TransactionDiversionDailyDetailType)`

SetDailyDetails sets DailyDetails field to given value.

### HasDailyDetails

`func (o *ReservationTransactionDiversionType) HasDailyDetails() bool`

HasDailyDetails returns a boolean if a field has been set.

### GetDescription

`func (o *ReservationTransactionDiversionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReservationTransactionDiversionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReservationTransactionDiversionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReservationTransactionDiversionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *ReservationTransactionDiversionType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *ReservationTransactionDiversionType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *ReservationTransactionDiversionType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *ReservationTransactionDiversionType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetDiverted

`func (o *ReservationTransactionDiversionType) GetDiverted() int32`

GetDiverted returns the Diverted field if non-nil, zero value otherwise.

### GetDivertedOk

`func (o *ReservationTransactionDiversionType) GetDivertedOk() (*int32, bool)`

GetDivertedOk returns a tuple with the Diverted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiverted

`func (o *ReservationTransactionDiversionType) SetDiverted(v int32)`

SetDiverted sets Diverted field to given value.

### HasDiverted

`func (o *ReservationTransactionDiversionType) HasDiverted() bool`

HasDiverted returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationTransactionDiversionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationTransactionDiversionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationTransactionDiversionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationTransactionDiversionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *ReservationTransactionDiversionType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ReservationTransactionDiversionType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ReservationTransactionDiversionType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ReservationTransactionDiversionType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLevel

`func (o *ReservationTransactionDiversionType) GetLevel() TransactionDiversionRuleLevelType`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *ReservationTransactionDiversionType) GetLevelOk() (*TransactionDiversionRuleLevelType, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *ReservationTransactionDiversionType) SetLevel(v TransactionDiversionRuleLevelType)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *ReservationTransactionDiversionType) HasLevel() bool`

HasLevel returns a boolean if a field has been set.

### GetMembership

`func (o *ReservationTransactionDiversionType) GetMembership() MembershipTypeLevelType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *ReservationTransactionDiversionType) GetMembershipOk() (*MembershipTypeLevelType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *ReservationTransactionDiversionType) SetMembership(v MembershipTypeLevelType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *ReservationTransactionDiversionType) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetNotes

`func (o *ReservationTransactionDiversionType) GetNotes() CommentInfoType`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ReservationTransactionDiversionType) GetNotesOk() (*CommentInfoType, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ReservationTransactionDiversionType) SetNotes(v CommentInfoType)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ReservationTransactionDiversionType) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetPosted

`func (o *ReservationTransactionDiversionType) GetPosted() int32`

GetPosted returns the Posted field if non-nil, zero value otherwise.

### GetPostedOk

`func (o *ReservationTransactionDiversionType) GetPostedOk() (*int32, bool)`

GetPostedOk returns a tuple with the Posted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosted

`func (o *ReservationTransactionDiversionType) SetPosted(v int32)`

SetPosted sets Posted field to given value.

### HasPosted

`func (o *ReservationTransactionDiversionType) HasPosted() bool`

HasPosted returns a boolean if a field has been set.

### GetTargetRoom

`func (o *ReservationTransactionDiversionType) GetTargetRoom() string`

GetTargetRoom returns the TargetRoom field if non-nil, zero value otherwise.

### GetTargetRoomOk

`func (o *ReservationTransactionDiversionType) GetTargetRoomOk() (*string, bool)`

GetTargetRoomOk returns a tuple with the TargetRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRoom

`func (o *ReservationTransactionDiversionType) SetTargetRoom(v string)`

SetTargetRoom sets TargetRoom field to given value.

### HasTargetRoom

`func (o *ReservationTransactionDiversionType) HasTargetRoom() bool`

HasTargetRoom returns a boolean if a field has been set.

### GetThresholds

`func (o *ReservationTransactionDiversionType) GetThresholds() ThresholdDetailsType`

GetThresholds returns the Thresholds field if non-nil, zero value otherwise.

### GetThresholdsOk

`func (o *ReservationTransactionDiversionType) GetThresholdsOk() (*ThresholdDetailsType, bool)`

GetThresholdsOk returns a tuple with the Thresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholds

`func (o *ReservationTransactionDiversionType) SetThresholds(v ThresholdDetailsType)`

SetThresholds sets Thresholds field to given value.

### HasThresholds

`func (o *ReservationTransactionDiversionType) HasThresholds() bool`

HasThresholds returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *ReservationTransactionDiversionType) GetTransactionCodes() []CodeDescriptionType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *ReservationTransactionDiversionType) GetTransactionCodesOk() (*[]CodeDescriptionType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *ReservationTransactionDiversionType) SetTransactionCodes(v []CodeDescriptionType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *ReservationTransactionDiversionType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetType

`func (o *ReservationTransactionDiversionType) GetType() TransactionDiversionRuleTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReservationTransactionDiversionType) GetTypeOk() (*TransactionDiversionRuleTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReservationTransactionDiversionType) SetType(v TransactionDiversionRuleTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *ReservationTransactionDiversionType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVipCode

`func (o *ReservationTransactionDiversionType) GetVipCode() string`

GetVipCode returns the VipCode field if non-nil, zero value otherwise.

### GetVipCodeOk

`func (o *ReservationTransactionDiversionType) GetVipCodeOk() (*string, bool)`

GetVipCodeOk returns a tuple with the VipCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipCode

`func (o *ReservationTransactionDiversionType) SetVipCode(v string)`

SetVipCode sets VipCode field to given value.

### HasVipCode

`func (o *ReservationTransactionDiversionType) HasVipCode() bool`

HasVipCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


