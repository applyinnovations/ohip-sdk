# MembershipHandlingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowCardNumberOverride** | Pointer to **bool** | Indicates whether to perform profile merge or not. | [optional] 
**AlternateNameProtected** | Pointer to **bool** | Prevent profile alternate name change. | [optional] 
**AutoGenerateReferenceNo** | Pointer to **bool** | Automatically generate the reference number for the primary membership. | [optional] 
**AutoPopulateNumberFromName** | Pointer to **bool** | Automatically populate number from name. | [optional] 
**DefaultMembershipStatus** | Pointer to **string** | Represents Membership status.This status will be assigned to Guest&#39;s profile with membership type. | [optional] 
**EnrollmentCodeRequired** | Pointer to **bool** | Indicates whether Enrollment Code required of not. | [optional] 
**ExternalDatabase** | Pointer to **string** | Indicates database for external system (if applicable). | [optional] 
**Fulfillment** | Pointer to **bool** | True if you wish to be able to select this membership type when creating an export file for fulfillment. | [optional] 
**LevelRequired** | Pointer to **bool** | Indicates whether to include membership level for validation or not , when profile membership information is send from External System to ORS/OCIS. | [optional] 
**MoveMemPromotions** | Pointer to **bool** | Move the membership promotions to the active membership. | [optional] 
**NameOnCardFromAltName** | Pointer to **bool** | Membership card name using the alternate name. | [optional] 
**NameProtected** | Pointer to **bool** | Prevent profile name change. | [optional] 
**SaveCardNumberHistory** | Pointer to **bool** | Indicates whether to store discard membership number or not.Membership Number will be discarded during profile merge. | [optional] 
**StatementUDFSet** | Pointer to **string** | Represents Membership Statement UDF Set. Selected Statement UDF template will be attached to Membership. | [optional] 

## Methods

### NewMembershipHandlingType

`func NewMembershipHandlingType() *MembershipHandlingType`

NewMembershipHandlingType instantiates a new MembershipHandlingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipHandlingTypeWithDefaults

`func NewMembershipHandlingTypeWithDefaults() *MembershipHandlingType`

NewMembershipHandlingTypeWithDefaults instantiates a new MembershipHandlingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowCardNumberOverride

`func (o *MembershipHandlingType) GetAllowCardNumberOverride() bool`

GetAllowCardNumberOverride returns the AllowCardNumberOverride field if non-nil, zero value otherwise.

### GetAllowCardNumberOverrideOk

`func (o *MembershipHandlingType) GetAllowCardNumberOverrideOk() (*bool, bool)`

GetAllowCardNumberOverrideOk returns a tuple with the AllowCardNumberOverride field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCardNumberOverride

`func (o *MembershipHandlingType) SetAllowCardNumberOverride(v bool)`

SetAllowCardNumberOverride sets AllowCardNumberOverride field to given value.

### HasAllowCardNumberOverride

`func (o *MembershipHandlingType) HasAllowCardNumberOverride() bool`

HasAllowCardNumberOverride returns a boolean if a field has been set.

### GetAlternateNameProtected

`func (o *MembershipHandlingType) GetAlternateNameProtected() bool`

GetAlternateNameProtected returns the AlternateNameProtected field if non-nil, zero value otherwise.

### GetAlternateNameProtectedOk

`func (o *MembershipHandlingType) GetAlternateNameProtectedOk() (*bool, bool)`

GetAlternateNameProtectedOk returns a tuple with the AlternateNameProtected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateNameProtected

`func (o *MembershipHandlingType) SetAlternateNameProtected(v bool)`

SetAlternateNameProtected sets AlternateNameProtected field to given value.

### HasAlternateNameProtected

`func (o *MembershipHandlingType) HasAlternateNameProtected() bool`

HasAlternateNameProtected returns a boolean if a field has been set.

### GetAutoGenerateReferenceNo

`func (o *MembershipHandlingType) GetAutoGenerateReferenceNo() bool`

GetAutoGenerateReferenceNo returns the AutoGenerateReferenceNo field if non-nil, zero value otherwise.

### GetAutoGenerateReferenceNoOk

`func (o *MembershipHandlingType) GetAutoGenerateReferenceNoOk() (*bool, bool)`

GetAutoGenerateReferenceNoOk returns a tuple with the AutoGenerateReferenceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoGenerateReferenceNo

`func (o *MembershipHandlingType) SetAutoGenerateReferenceNo(v bool)`

SetAutoGenerateReferenceNo sets AutoGenerateReferenceNo field to given value.

### HasAutoGenerateReferenceNo

`func (o *MembershipHandlingType) HasAutoGenerateReferenceNo() bool`

HasAutoGenerateReferenceNo returns a boolean if a field has been set.

### GetAutoPopulateNumberFromName

`func (o *MembershipHandlingType) GetAutoPopulateNumberFromName() bool`

GetAutoPopulateNumberFromName returns the AutoPopulateNumberFromName field if non-nil, zero value otherwise.

### GetAutoPopulateNumberFromNameOk

`func (o *MembershipHandlingType) GetAutoPopulateNumberFromNameOk() (*bool, bool)`

GetAutoPopulateNumberFromNameOk returns a tuple with the AutoPopulateNumberFromName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoPopulateNumberFromName

`func (o *MembershipHandlingType) SetAutoPopulateNumberFromName(v bool)`

SetAutoPopulateNumberFromName sets AutoPopulateNumberFromName field to given value.

### HasAutoPopulateNumberFromName

`func (o *MembershipHandlingType) HasAutoPopulateNumberFromName() bool`

HasAutoPopulateNumberFromName returns a boolean if a field has been set.

### GetDefaultMembershipStatus

`func (o *MembershipHandlingType) GetDefaultMembershipStatus() string`

GetDefaultMembershipStatus returns the DefaultMembershipStatus field if non-nil, zero value otherwise.

### GetDefaultMembershipStatusOk

`func (o *MembershipHandlingType) GetDefaultMembershipStatusOk() (*string, bool)`

GetDefaultMembershipStatusOk returns a tuple with the DefaultMembershipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultMembershipStatus

`func (o *MembershipHandlingType) SetDefaultMembershipStatus(v string)`

SetDefaultMembershipStatus sets DefaultMembershipStatus field to given value.

### HasDefaultMembershipStatus

`func (o *MembershipHandlingType) HasDefaultMembershipStatus() bool`

HasDefaultMembershipStatus returns a boolean if a field has been set.

### GetEnrollmentCodeRequired

`func (o *MembershipHandlingType) GetEnrollmentCodeRequired() bool`

GetEnrollmentCodeRequired returns the EnrollmentCodeRequired field if non-nil, zero value otherwise.

### GetEnrollmentCodeRequiredOk

`func (o *MembershipHandlingType) GetEnrollmentCodeRequiredOk() (*bool, bool)`

GetEnrollmentCodeRequiredOk returns a tuple with the EnrollmentCodeRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentCodeRequired

`func (o *MembershipHandlingType) SetEnrollmentCodeRequired(v bool)`

SetEnrollmentCodeRequired sets EnrollmentCodeRequired field to given value.

### HasEnrollmentCodeRequired

`func (o *MembershipHandlingType) HasEnrollmentCodeRequired() bool`

HasEnrollmentCodeRequired returns a boolean if a field has been set.

### GetExternalDatabase

`func (o *MembershipHandlingType) GetExternalDatabase() string`

GetExternalDatabase returns the ExternalDatabase field if non-nil, zero value otherwise.

### GetExternalDatabaseOk

`func (o *MembershipHandlingType) GetExternalDatabaseOk() (*string, bool)`

GetExternalDatabaseOk returns a tuple with the ExternalDatabase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalDatabase

`func (o *MembershipHandlingType) SetExternalDatabase(v string)`

SetExternalDatabase sets ExternalDatabase field to given value.

### HasExternalDatabase

`func (o *MembershipHandlingType) HasExternalDatabase() bool`

HasExternalDatabase returns a boolean if a field has been set.

### GetFulfillment

`func (o *MembershipHandlingType) GetFulfillment() bool`

GetFulfillment returns the Fulfillment field if non-nil, zero value otherwise.

### GetFulfillmentOk

`func (o *MembershipHandlingType) GetFulfillmentOk() (*bool, bool)`

GetFulfillmentOk returns a tuple with the Fulfillment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFulfillment

`func (o *MembershipHandlingType) SetFulfillment(v bool)`

SetFulfillment sets Fulfillment field to given value.

### HasFulfillment

`func (o *MembershipHandlingType) HasFulfillment() bool`

HasFulfillment returns a boolean if a field has been set.

### GetLevelRequired

`func (o *MembershipHandlingType) GetLevelRequired() bool`

GetLevelRequired returns the LevelRequired field if non-nil, zero value otherwise.

### GetLevelRequiredOk

`func (o *MembershipHandlingType) GetLevelRequiredOk() (*bool, bool)`

GetLevelRequiredOk returns a tuple with the LevelRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelRequired

`func (o *MembershipHandlingType) SetLevelRequired(v bool)`

SetLevelRequired sets LevelRequired field to given value.

### HasLevelRequired

`func (o *MembershipHandlingType) HasLevelRequired() bool`

HasLevelRequired returns a boolean if a field has been set.

### GetMoveMemPromotions

`func (o *MembershipHandlingType) GetMoveMemPromotions() bool`

GetMoveMemPromotions returns the MoveMemPromotions field if non-nil, zero value otherwise.

### GetMoveMemPromotionsOk

`func (o *MembershipHandlingType) GetMoveMemPromotionsOk() (*bool, bool)`

GetMoveMemPromotionsOk returns a tuple with the MoveMemPromotions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveMemPromotions

`func (o *MembershipHandlingType) SetMoveMemPromotions(v bool)`

SetMoveMemPromotions sets MoveMemPromotions field to given value.

### HasMoveMemPromotions

`func (o *MembershipHandlingType) HasMoveMemPromotions() bool`

HasMoveMemPromotions returns a boolean if a field has been set.

### GetNameOnCardFromAltName

`func (o *MembershipHandlingType) GetNameOnCardFromAltName() bool`

GetNameOnCardFromAltName returns the NameOnCardFromAltName field if non-nil, zero value otherwise.

### GetNameOnCardFromAltNameOk

`func (o *MembershipHandlingType) GetNameOnCardFromAltNameOk() (*bool, bool)`

GetNameOnCardFromAltNameOk returns a tuple with the NameOnCardFromAltName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCardFromAltName

`func (o *MembershipHandlingType) SetNameOnCardFromAltName(v bool)`

SetNameOnCardFromAltName sets NameOnCardFromAltName field to given value.

### HasNameOnCardFromAltName

`func (o *MembershipHandlingType) HasNameOnCardFromAltName() bool`

HasNameOnCardFromAltName returns a boolean if a field has been set.

### GetNameProtected

`func (o *MembershipHandlingType) GetNameProtected() bool`

GetNameProtected returns the NameProtected field if non-nil, zero value otherwise.

### GetNameProtectedOk

`func (o *MembershipHandlingType) GetNameProtectedOk() (*bool, bool)`

GetNameProtectedOk returns a tuple with the NameProtected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameProtected

`func (o *MembershipHandlingType) SetNameProtected(v bool)`

SetNameProtected sets NameProtected field to given value.

### HasNameProtected

`func (o *MembershipHandlingType) HasNameProtected() bool`

HasNameProtected returns a boolean if a field has been set.

### GetSaveCardNumberHistory

`func (o *MembershipHandlingType) GetSaveCardNumberHistory() bool`

GetSaveCardNumberHistory returns the SaveCardNumberHistory field if non-nil, zero value otherwise.

### GetSaveCardNumberHistoryOk

`func (o *MembershipHandlingType) GetSaveCardNumberHistoryOk() (*bool, bool)`

GetSaveCardNumberHistoryOk returns a tuple with the SaveCardNumberHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaveCardNumberHistory

`func (o *MembershipHandlingType) SetSaveCardNumberHistory(v bool)`

SetSaveCardNumberHistory sets SaveCardNumberHistory field to given value.

### HasSaveCardNumberHistory

`func (o *MembershipHandlingType) HasSaveCardNumberHistory() bool`

HasSaveCardNumberHistory returns a boolean if a field has been set.

### GetStatementUDFSet

`func (o *MembershipHandlingType) GetStatementUDFSet() string`

GetStatementUDFSet returns the StatementUDFSet field if non-nil, zero value otherwise.

### GetStatementUDFSetOk

`func (o *MembershipHandlingType) GetStatementUDFSetOk() (*string, bool)`

GetStatementUDFSetOk returns a tuple with the StatementUDFSet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementUDFSet

`func (o *MembershipHandlingType) SetStatementUDFSet(v string)`

SetStatementUDFSet sets StatementUDFSet field to given value.

### HasStatementUDFSet

`func (o *MembershipHandlingType) HasStatementUDFSet() bool`

HasStatementUDFSet returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


