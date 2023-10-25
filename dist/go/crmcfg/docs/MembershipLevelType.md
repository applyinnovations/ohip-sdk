# MembershipLevelType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoRenewGrace** | Pointer to **int32** | Select the number of graces the member will be allowed before the membership level auto-renews based on the member current points. It is available when the Tier Management Reset option is selected on Membership Type. | [optional] 
**CardValidYears** | Pointer to **int32** | Specify the time limit (from 1 to 5 years) for membership card expiration for this level | [optional] 
**ChangesRestricted** | Pointer to **bool** | Indicates whether memberships level is restricted to prevent users from making changes to it. | [optional] 
**Code** | Pointer to **string** | Membership level | [optional] 
**Description** | Pointer to **string** | Description of the Membership level. | [optional] 
**DisplayColor** | Pointer to [**ColorType**](ColorType.md) |  | [optional] 
**FeeRequired** | Pointer to **bool** | Indicates whether membership fee payment is required upon upgrade to this membership level. | [optional] 
**FolioTexts** | Pointer to [**[]HotelFolioTextType**](HotelFolioTextType.md) | Collection of hotel folio texts | [optional] 
**Fulfillment** | Pointer to **bool** | Indicates whether memberships upgraded or downgraded to or from this level will be included in the Membership Export. | [optional] 
**Inactive** | Pointer to **bool** | Inactive flag for a Membership level. | [optional] 
**Label** | Pointer to **string** | Label of the Membership level. | [optional] 
**MaxDowngradeLevel** | Pointer to **string** | The lowest level in which this level can be downgraded to. | [optional] 
**NumberOfTransactions** | Pointer to **int32** | Number of transaction(s) for each stay. Value will be 2 in case of double dipping otherwise it will be null or 1. | [optional] 
**Rank** | Pointer to **float32** | Rank of Membership level. | [optional] 
**RenewCard** | Pointer to **bool** | Indicates whether membership has expired by the time the membership record is uploaded, the members card will be renewed and updated with a new expiration date. | [optional] 
**RestrictedLevel** | Pointer to **bool** | Indicates whether memberships level is restricted to prevent users from making changes to it. It is available when the Advanced Enrollment option is selected on Membership Type. | [optional] 
**Type** | Pointer to **string** | Membership type | [optional] 
**Vip** | Pointer to **string** | VIP level associated to the Membership level. | [optional] 

## Methods

### NewMembershipLevelType

`func NewMembershipLevelType() *MembershipLevelType`

NewMembershipLevelType instantiates a new MembershipLevelType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipLevelTypeWithDefaults

`func NewMembershipLevelTypeWithDefaults() *MembershipLevelType`

NewMembershipLevelTypeWithDefaults instantiates a new MembershipLevelType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoRenewGrace

`func (o *MembershipLevelType) GetAutoRenewGrace() int32`

GetAutoRenewGrace returns the AutoRenewGrace field if non-nil, zero value otherwise.

### GetAutoRenewGraceOk

`func (o *MembershipLevelType) GetAutoRenewGraceOk() (*int32, bool)`

GetAutoRenewGraceOk returns a tuple with the AutoRenewGrace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRenewGrace

`func (o *MembershipLevelType) SetAutoRenewGrace(v int32)`

SetAutoRenewGrace sets AutoRenewGrace field to given value.

### HasAutoRenewGrace

`func (o *MembershipLevelType) HasAutoRenewGrace() bool`

HasAutoRenewGrace returns a boolean if a field has been set.

### GetCardValidYears

`func (o *MembershipLevelType) GetCardValidYears() int32`

GetCardValidYears returns the CardValidYears field if non-nil, zero value otherwise.

### GetCardValidYearsOk

`func (o *MembershipLevelType) GetCardValidYearsOk() (*int32, bool)`

GetCardValidYearsOk returns a tuple with the CardValidYears field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardValidYears

`func (o *MembershipLevelType) SetCardValidYears(v int32)`

SetCardValidYears sets CardValidYears field to given value.

### HasCardValidYears

`func (o *MembershipLevelType) HasCardValidYears() bool`

HasCardValidYears returns a boolean if a field has been set.

### GetChangesRestricted

`func (o *MembershipLevelType) GetChangesRestricted() bool`

GetChangesRestricted returns the ChangesRestricted field if non-nil, zero value otherwise.

### GetChangesRestrictedOk

`func (o *MembershipLevelType) GetChangesRestrictedOk() (*bool, bool)`

GetChangesRestrictedOk returns a tuple with the ChangesRestricted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangesRestricted

`func (o *MembershipLevelType) SetChangesRestricted(v bool)`

SetChangesRestricted sets ChangesRestricted field to given value.

### HasChangesRestricted

`func (o *MembershipLevelType) HasChangesRestricted() bool`

HasChangesRestricted returns a boolean if a field has been set.

### GetCode

`func (o *MembershipLevelType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *MembershipLevelType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *MembershipLevelType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *MembershipLevelType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *MembershipLevelType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MembershipLevelType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MembershipLevelType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MembershipLevelType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayColor

`func (o *MembershipLevelType) GetDisplayColor() ColorType`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *MembershipLevelType) GetDisplayColorOk() (*ColorType, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *MembershipLevelType) SetDisplayColor(v ColorType)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *MembershipLevelType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.

### GetFeeRequired

`func (o *MembershipLevelType) GetFeeRequired() bool`

GetFeeRequired returns the FeeRequired field if non-nil, zero value otherwise.

### GetFeeRequiredOk

`func (o *MembershipLevelType) GetFeeRequiredOk() (*bool, bool)`

GetFeeRequiredOk returns a tuple with the FeeRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeeRequired

`func (o *MembershipLevelType) SetFeeRequired(v bool)`

SetFeeRequired sets FeeRequired field to given value.

### HasFeeRequired

`func (o *MembershipLevelType) HasFeeRequired() bool`

HasFeeRequired returns a boolean if a field has been set.

### GetFolioTexts

`func (o *MembershipLevelType) GetFolioTexts() []HotelFolioTextType`

GetFolioTexts returns the FolioTexts field if non-nil, zero value otherwise.

### GetFolioTextsOk

`func (o *MembershipLevelType) GetFolioTextsOk() (*[]HotelFolioTextType, bool)`

GetFolioTextsOk returns a tuple with the FolioTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTexts

`func (o *MembershipLevelType) SetFolioTexts(v []HotelFolioTextType)`

SetFolioTexts sets FolioTexts field to given value.

### HasFolioTexts

`func (o *MembershipLevelType) HasFolioTexts() bool`

HasFolioTexts returns a boolean if a field has been set.

### GetFulfillment

`func (o *MembershipLevelType) GetFulfillment() bool`

GetFulfillment returns the Fulfillment field if non-nil, zero value otherwise.

### GetFulfillmentOk

`func (o *MembershipLevelType) GetFulfillmentOk() (*bool, bool)`

GetFulfillmentOk returns a tuple with the Fulfillment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFulfillment

`func (o *MembershipLevelType) SetFulfillment(v bool)`

SetFulfillment sets Fulfillment field to given value.

### HasFulfillment

`func (o *MembershipLevelType) HasFulfillment() bool`

HasFulfillment returns a boolean if a field has been set.

### GetInactive

`func (o *MembershipLevelType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MembershipLevelType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MembershipLevelType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MembershipLevelType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLabel

`func (o *MembershipLevelType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *MembershipLevelType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *MembershipLevelType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *MembershipLevelType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetMaxDowngradeLevel

`func (o *MembershipLevelType) GetMaxDowngradeLevel() string`

GetMaxDowngradeLevel returns the MaxDowngradeLevel field if non-nil, zero value otherwise.

### GetMaxDowngradeLevelOk

`func (o *MembershipLevelType) GetMaxDowngradeLevelOk() (*string, bool)`

GetMaxDowngradeLevelOk returns a tuple with the MaxDowngradeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxDowngradeLevel

`func (o *MembershipLevelType) SetMaxDowngradeLevel(v string)`

SetMaxDowngradeLevel sets MaxDowngradeLevel field to given value.

### HasMaxDowngradeLevel

`func (o *MembershipLevelType) HasMaxDowngradeLevel() bool`

HasMaxDowngradeLevel returns a boolean if a field has been set.

### GetNumberOfTransactions

`func (o *MembershipLevelType) GetNumberOfTransactions() int32`

GetNumberOfTransactions returns the NumberOfTransactions field if non-nil, zero value otherwise.

### GetNumberOfTransactionsOk

`func (o *MembershipLevelType) GetNumberOfTransactionsOk() (*int32, bool)`

GetNumberOfTransactionsOk returns a tuple with the NumberOfTransactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfTransactions

`func (o *MembershipLevelType) SetNumberOfTransactions(v int32)`

SetNumberOfTransactions sets NumberOfTransactions field to given value.

### HasNumberOfTransactions

`func (o *MembershipLevelType) HasNumberOfTransactions() bool`

HasNumberOfTransactions returns a boolean if a field has been set.

### GetRank

`func (o *MembershipLevelType) GetRank() float32`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *MembershipLevelType) GetRankOk() (*float32, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *MembershipLevelType) SetRank(v float32)`

SetRank sets Rank field to given value.

### HasRank

`func (o *MembershipLevelType) HasRank() bool`

HasRank returns a boolean if a field has been set.

### GetRenewCard

`func (o *MembershipLevelType) GetRenewCard() bool`

GetRenewCard returns the RenewCard field if non-nil, zero value otherwise.

### GetRenewCardOk

`func (o *MembershipLevelType) GetRenewCardOk() (*bool, bool)`

GetRenewCardOk returns a tuple with the RenewCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRenewCard

`func (o *MembershipLevelType) SetRenewCard(v bool)`

SetRenewCard sets RenewCard field to given value.

### HasRenewCard

`func (o *MembershipLevelType) HasRenewCard() bool`

HasRenewCard returns a boolean if a field has been set.

### GetRestrictedLevel

`func (o *MembershipLevelType) GetRestrictedLevel() bool`

GetRestrictedLevel returns the RestrictedLevel field if non-nil, zero value otherwise.

### GetRestrictedLevelOk

`func (o *MembershipLevelType) GetRestrictedLevelOk() (*bool, bool)`

GetRestrictedLevelOk returns a tuple with the RestrictedLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictedLevel

`func (o *MembershipLevelType) SetRestrictedLevel(v bool)`

SetRestrictedLevel sets RestrictedLevel field to given value.

### HasRestrictedLevel

`func (o *MembershipLevelType) HasRestrictedLevel() bool`

HasRestrictedLevel returns a boolean if a field has been set.

### GetType

`func (o *MembershipLevelType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MembershipLevelType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MembershipLevelType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MembershipLevelType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetVip

`func (o *MembershipLevelType) GetVip() string`

GetVip returns the Vip field if non-nil, zero value otherwise.

### GetVipOk

`func (o *MembershipLevelType) GetVipOk() (*string, bool)`

GetVipOk returns a tuple with the Vip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVip

`func (o *MembershipLevelType) SetVip(v string)`

SetVip sets Vip field to given value.

### HasVip

`func (o *MembershipLevelType) HasVip() bool`

HasVip returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


