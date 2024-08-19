# StagedProfileMembershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Benefits** | Pointer to [**[]BenefitType**](BenefitType.md) | Basic information about membership benefit. | [optional] 
**CentralSetup** | Pointer to **bool** | Indicates how the award points for this membership type will be managed. | [optional] 
**Comment** | Pointer to [**ParagraphType**](ParagraphType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**CurrentPoints** | Pointer to **float32** | Profile MemberShip Points. | [optional] 
**DeviceCode** | Pointer to **string** | Device encoded string. | [optional] 
**DeviceDisabledDate** | Pointer to **string** | Device disabled date. | [optional] 
**Downgrade** | Pointer to [**DowngradeType**](DowngradeType.md) |  | [optional] 
**DowngradeDescription** | Pointer to **string** | Indicates information regarding the member&#39;s possible downgrades. | [optional] 
**EarningPreference** | Pointer to [**MembershipEarningPreferenceType**](MembershipEarningPreferenceType.md) |  | [optional] 
**EffectiveDate** | Pointer to **string** | Indicates the starting date. | [optional] 
**EnrollmentCode** | Pointer to **string** | Enrollment code. | [optional] 
**EnrollmentResort** | Pointer to **string** | Resort/CRO where enrollment is done. | [optional] 
**EnrollmentSource** | Pointer to **string** | Source from where the enrollment is done. | [optional] 
**ErrorDescription** | Pointer to **string** | The error in membership information in a staged profile with an invalid status. | [optional] 
**ExcludeFromBatch** | Pointer to **bool** | True if you want to exclude the member from the Membership Fulfillment extract,the member&#39;s actions will not be included in the fulfillment extract until this value set to false. | [optional] 
**ExpireDate** | Pointer to **string** | Indicates the ending date. | [optional] 
**ExpireDateExclusiveIndicator** | Pointer to **bool** | When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether membership is active or inactive. | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the record. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**MemberStatus** | Pointer to **string** | Indicates where the guest is in the membership enrollment process. | [optional] 
**MembershipClass** | Pointer to **string** | Indicates the membership class. | [optional] 
**MembershipEnrollmentCode** | Pointer to **string** | Indicates how the guest enrolled in the program. | [optional] 
**MembershipId** | Pointer to **string** | Card Number of the membership. | [optional] 
**MembershipIdNo** | Pointer to **int32** | Membership ID Number. | [optional] 
**MembershipLevel** | Pointer to **string** | Indicates the membership level. | [optional] 
**MembershipLevelDescription** | Pointer to **string** | Indicates the membership level description. | [optional] 
**MembershipStatus** | Pointer to **string** | Membership status. | [optional] 
**MembershipType** | Pointer to **string** | Type of membership. | [optional] 
**NameOnCard** | Pointer to **string** | Name to be displayed on the membership card. | [optional] 
**NewMembershipNumber** | Pointer to **string** | Card Number of the membership. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PlayerRanking** | Pointer to **int32** | Ranking assigned to the Player Profile by the Gaming system. | [optional] 
**PointsLabel** | Pointer to **string** | Label used to refer to points for this membership type | [optional] 
**PreferredCard** | Pointer to **bool** | Preferred Card. | [optional] 
**PrimaryMembership** | Pointer to **bool** | Boolean indicator set to True implies membership is a Primary Membership. | [optional] 
**PrimaryMembershipYn** | Pointer to **string** | Indicator if Membership is a Primary Membership. | [optional] 
**ProgramDescription** | Pointer to **string** | Description of the membership program. | [optional] 
**Rating** | Pointer to **string** | Value Rating Type Description for this membership. | [optional] 
**ReIssueNewCard** | Pointer to [**CardReIssueType**](CardReIssueType.md) |  | [optional] 
**RegistrationResort** | Pointer to **string** | Registration resort. | [optional] 
**SignupDate** | Pointer to **string** | Indicates when the member signed up for the loyalty program. | [optional] 
**TierAdministration** | Pointer to [**TierAdministrationType**](TierAdministrationType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**UpdateExistingMembership** | Pointer to **bool** | Indicates if existing information for primary membership should be overwritten. | [optional] 
**UpgradeDescription** | Pointer to **string** | Indicates Upgrade information which includes member&#39;s next tier level, requirements for the next upgrade. | [optional] 

## Methods

### NewStagedProfileMembershipType

`func NewStagedProfileMembershipType() *StagedProfileMembershipType`

NewStagedProfileMembershipType instantiates a new StagedProfileMembershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileMembershipTypeWithDefaults

`func NewStagedProfileMembershipTypeWithDefaults() *StagedProfileMembershipType`

NewStagedProfileMembershipTypeWithDefaults instantiates a new StagedProfileMembershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBenefits

`func (o *StagedProfileMembershipType) GetBenefits() []BenefitType`

GetBenefits returns the Benefits field if non-nil, zero value otherwise.

### GetBenefitsOk

`func (o *StagedProfileMembershipType) GetBenefitsOk() (*[]BenefitType, bool)`

GetBenefitsOk returns a tuple with the Benefits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBenefits

`func (o *StagedProfileMembershipType) SetBenefits(v []BenefitType)`

SetBenefits sets Benefits field to given value.

### HasBenefits

`func (o *StagedProfileMembershipType) HasBenefits() bool`

HasBenefits returns a boolean if a field has been set.

### GetCentralSetup

`func (o *StagedProfileMembershipType) GetCentralSetup() bool`

GetCentralSetup returns the CentralSetup field if non-nil, zero value otherwise.

### GetCentralSetupOk

`func (o *StagedProfileMembershipType) GetCentralSetupOk() (*bool, bool)`

GetCentralSetupOk returns a tuple with the CentralSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralSetup

`func (o *StagedProfileMembershipType) SetCentralSetup(v bool)`

SetCentralSetup sets CentralSetup field to given value.

### HasCentralSetup

`func (o *StagedProfileMembershipType) HasCentralSetup() bool`

HasCentralSetup returns a boolean if a field has been set.

### GetComment

`func (o *StagedProfileMembershipType) GetComment() ParagraphType`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *StagedProfileMembershipType) GetCommentOk() (*ParagraphType, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *StagedProfileMembershipType) SetComment(v ParagraphType)`

SetComment sets Comment field to given value.

### HasComment

`func (o *StagedProfileMembershipType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *StagedProfileMembershipType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *StagedProfileMembershipType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *StagedProfileMembershipType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *StagedProfileMembershipType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *StagedProfileMembershipType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *StagedProfileMembershipType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *StagedProfileMembershipType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *StagedProfileMembershipType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCurrentPoints

`func (o *StagedProfileMembershipType) GetCurrentPoints() float32`

GetCurrentPoints returns the CurrentPoints field if non-nil, zero value otherwise.

### GetCurrentPointsOk

`func (o *StagedProfileMembershipType) GetCurrentPointsOk() (*float32, bool)`

GetCurrentPointsOk returns a tuple with the CurrentPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPoints

`func (o *StagedProfileMembershipType) SetCurrentPoints(v float32)`

SetCurrentPoints sets CurrentPoints field to given value.

### HasCurrentPoints

`func (o *StagedProfileMembershipType) HasCurrentPoints() bool`

HasCurrentPoints returns a boolean if a field has been set.

### GetDeviceCode

`func (o *StagedProfileMembershipType) GetDeviceCode() string`

GetDeviceCode returns the DeviceCode field if non-nil, zero value otherwise.

### GetDeviceCodeOk

`func (o *StagedProfileMembershipType) GetDeviceCodeOk() (*string, bool)`

GetDeviceCodeOk returns a tuple with the DeviceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceCode

`func (o *StagedProfileMembershipType) SetDeviceCode(v string)`

SetDeviceCode sets DeviceCode field to given value.

### HasDeviceCode

`func (o *StagedProfileMembershipType) HasDeviceCode() bool`

HasDeviceCode returns a boolean if a field has been set.

### GetDeviceDisabledDate

`func (o *StagedProfileMembershipType) GetDeviceDisabledDate() string`

GetDeviceDisabledDate returns the DeviceDisabledDate field if non-nil, zero value otherwise.

### GetDeviceDisabledDateOk

`func (o *StagedProfileMembershipType) GetDeviceDisabledDateOk() (*string, bool)`

GetDeviceDisabledDateOk returns a tuple with the DeviceDisabledDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeviceDisabledDate

`func (o *StagedProfileMembershipType) SetDeviceDisabledDate(v string)`

SetDeviceDisabledDate sets DeviceDisabledDate field to given value.

### HasDeviceDisabledDate

`func (o *StagedProfileMembershipType) HasDeviceDisabledDate() bool`

HasDeviceDisabledDate returns a boolean if a field has been set.

### GetDowngrade

`func (o *StagedProfileMembershipType) GetDowngrade() DowngradeType`

GetDowngrade returns the Downgrade field if non-nil, zero value otherwise.

### GetDowngradeOk

`func (o *StagedProfileMembershipType) GetDowngradeOk() (*DowngradeType, bool)`

GetDowngradeOk returns a tuple with the Downgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngrade

`func (o *StagedProfileMembershipType) SetDowngrade(v DowngradeType)`

SetDowngrade sets Downgrade field to given value.

### HasDowngrade

`func (o *StagedProfileMembershipType) HasDowngrade() bool`

HasDowngrade returns a boolean if a field has been set.

### GetDowngradeDescription

`func (o *StagedProfileMembershipType) GetDowngradeDescription() string`

GetDowngradeDescription returns the DowngradeDescription field if non-nil, zero value otherwise.

### GetDowngradeDescriptionOk

`func (o *StagedProfileMembershipType) GetDowngradeDescriptionOk() (*string, bool)`

GetDowngradeDescriptionOk returns a tuple with the DowngradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradeDescription

`func (o *StagedProfileMembershipType) SetDowngradeDescription(v string)`

SetDowngradeDescription sets DowngradeDescription field to given value.

### HasDowngradeDescription

`func (o *StagedProfileMembershipType) HasDowngradeDescription() bool`

HasDowngradeDescription returns a boolean if a field has been set.

### GetEarningPreference

`func (o *StagedProfileMembershipType) GetEarningPreference() MembershipEarningPreferenceType`

GetEarningPreference returns the EarningPreference field if non-nil, zero value otherwise.

### GetEarningPreferenceOk

`func (o *StagedProfileMembershipType) GetEarningPreferenceOk() (*MembershipEarningPreferenceType, bool)`

GetEarningPreferenceOk returns a tuple with the EarningPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarningPreference

`func (o *StagedProfileMembershipType) SetEarningPreference(v MembershipEarningPreferenceType)`

SetEarningPreference sets EarningPreference field to given value.

### HasEarningPreference

`func (o *StagedProfileMembershipType) HasEarningPreference() bool`

HasEarningPreference returns a boolean if a field has been set.

### GetEffectiveDate

`func (o *StagedProfileMembershipType) GetEffectiveDate() string`

GetEffectiveDate returns the EffectiveDate field if non-nil, zero value otherwise.

### GetEffectiveDateOk

`func (o *StagedProfileMembershipType) GetEffectiveDateOk() (*string, bool)`

GetEffectiveDateOk returns a tuple with the EffectiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveDate

`func (o *StagedProfileMembershipType) SetEffectiveDate(v string)`

SetEffectiveDate sets EffectiveDate field to given value.

### HasEffectiveDate

`func (o *StagedProfileMembershipType) HasEffectiveDate() bool`

HasEffectiveDate returns a boolean if a field has been set.

### GetEnrollmentCode

`func (o *StagedProfileMembershipType) GetEnrollmentCode() string`

GetEnrollmentCode returns the EnrollmentCode field if non-nil, zero value otherwise.

### GetEnrollmentCodeOk

`func (o *StagedProfileMembershipType) GetEnrollmentCodeOk() (*string, bool)`

GetEnrollmentCodeOk returns a tuple with the EnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentCode

`func (o *StagedProfileMembershipType) SetEnrollmentCode(v string)`

SetEnrollmentCode sets EnrollmentCode field to given value.

### HasEnrollmentCode

`func (o *StagedProfileMembershipType) HasEnrollmentCode() bool`

HasEnrollmentCode returns a boolean if a field has been set.

### GetEnrollmentResort

`func (o *StagedProfileMembershipType) GetEnrollmentResort() string`

GetEnrollmentResort returns the EnrollmentResort field if non-nil, zero value otherwise.

### GetEnrollmentResortOk

`func (o *StagedProfileMembershipType) GetEnrollmentResortOk() (*string, bool)`

GetEnrollmentResortOk returns a tuple with the EnrollmentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentResort

`func (o *StagedProfileMembershipType) SetEnrollmentResort(v string)`

SetEnrollmentResort sets EnrollmentResort field to given value.

### HasEnrollmentResort

`func (o *StagedProfileMembershipType) HasEnrollmentResort() bool`

HasEnrollmentResort returns a boolean if a field has been set.

### GetEnrollmentSource

`func (o *StagedProfileMembershipType) GetEnrollmentSource() string`

GetEnrollmentSource returns the EnrollmentSource field if non-nil, zero value otherwise.

### GetEnrollmentSourceOk

`func (o *StagedProfileMembershipType) GetEnrollmentSourceOk() (*string, bool)`

GetEnrollmentSourceOk returns a tuple with the EnrollmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentSource

`func (o *StagedProfileMembershipType) SetEnrollmentSource(v string)`

SetEnrollmentSource sets EnrollmentSource field to given value.

### HasEnrollmentSource

`func (o *StagedProfileMembershipType) HasEnrollmentSource() bool`

HasEnrollmentSource returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileMembershipType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileMembershipType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileMembershipType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileMembershipType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetExcludeFromBatch

`func (o *StagedProfileMembershipType) GetExcludeFromBatch() bool`

GetExcludeFromBatch returns the ExcludeFromBatch field if non-nil, zero value otherwise.

### GetExcludeFromBatchOk

`func (o *StagedProfileMembershipType) GetExcludeFromBatchOk() (*bool, bool)`

GetExcludeFromBatchOk returns a tuple with the ExcludeFromBatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromBatch

`func (o *StagedProfileMembershipType) SetExcludeFromBatch(v bool)`

SetExcludeFromBatch sets ExcludeFromBatch field to given value.

### HasExcludeFromBatch

`func (o *StagedProfileMembershipType) HasExcludeFromBatch() bool`

HasExcludeFromBatch returns a boolean if a field has been set.

### GetExpireDate

`func (o *StagedProfileMembershipType) GetExpireDate() string`

GetExpireDate returns the ExpireDate field if non-nil, zero value otherwise.

### GetExpireDateOk

`func (o *StagedProfileMembershipType) GetExpireDateOk() (*string, bool)`

GetExpireDateOk returns a tuple with the ExpireDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDate

`func (o *StagedProfileMembershipType) SetExpireDate(v string)`

SetExpireDate sets ExpireDate field to given value.

### HasExpireDate

`func (o *StagedProfileMembershipType) HasExpireDate() bool`

HasExpireDate returns a boolean if a field has been set.

### GetExpireDateExclusiveIndicator

`func (o *StagedProfileMembershipType) GetExpireDateExclusiveIndicator() bool`

GetExpireDateExclusiveIndicator returns the ExpireDateExclusiveIndicator field if non-nil, zero value otherwise.

### GetExpireDateExclusiveIndicatorOk

`func (o *StagedProfileMembershipType) GetExpireDateExclusiveIndicatorOk() (*bool, bool)`

GetExpireDateExclusiveIndicatorOk returns a tuple with the ExpireDateExclusiveIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDateExclusiveIndicator

`func (o *StagedProfileMembershipType) SetExpireDateExclusiveIndicator(v bool)`

SetExpireDateExclusiveIndicator sets ExpireDateExclusiveIndicator field to given value.

### HasExpireDateExclusiveIndicator

`func (o *StagedProfileMembershipType) HasExpireDateExclusiveIndicator() bool`

HasExpireDateExclusiveIndicator returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileMembershipType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileMembershipType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileMembershipType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileMembershipType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInactive

`func (o *StagedProfileMembershipType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *StagedProfileMembershipType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *StagedProfileMembershipType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *StagedProfileMembershipType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetInactiveDate

`func (o *StagedProfileMembershipType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *StagedProfileMembershipType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *StagedProfileMembershipType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *StagedProfileMembershipType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetLastModifierId

`func (o *StagedProfileMembershipType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *StagedProfileMembershipType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *StagedProfileMembershipType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *StagedProfileMembershipType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *StagedProfileMembershipType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *StagedProfileMembershipType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *StagedProfileMembershipType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *StagedProfileMembershipType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetMemberStatus

`func (o *StagedProfileMembershipType) GetMemberStatus() string`

GetMemberStatus returns the MemberStatus field if non-nil, zero value otherwise.

### GetMemberStatusOk

`func (o *StagedProfileMembershipType) GetMemberStatusOk() (*string, bool)`

GetMemberStatusOk returns a tuple with the MemberStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberStatus

`func (o *StagedProfileMembershipType) SetMemberStatus(v string)`

SetMemberStatus sets MemberStatus field to given value.

### HasMemberStatus

`func (o *StagedProfileMembershipType) HasMemberStatus() bool`

HasMemberStatus returns a boolean if a field has been set.

### GetMembershipClass

`func (o *StagedProfileMembershipType) GetMembershipClass() string`

GetMembershipClass returns the MembershipClass field if non-nil, zero value otherwise.

### GetMembershipClassOk

`func (o *StagedProfileMembershipType) GetMembershipClassOk() (*string, bool)`

GetMembershipClassOk returns a tuple with the MembershipClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClass

`func (o *StagedProfileMembershipType) SetMembershipClass(v string)`

SetMembershipClass sets MembershipClass field to given value.

### HasMembershipClass

`func (o *StagedProfileMembershipType) HasMembershipClass() bool`

HasMembershipClass returns a boolean if a field has been set.

### GetMembershipEnrollmentCode

`func (o *StagedProfileMembershipType) GetMembershipEnrollmentCode() string`

GetMembershipEnrollmentCode returns the MembershipEnrollmentCode field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodeOk

`func (o *StagedProfileMembershipType) GetMembershipEnrollmentCodeOk() (*string, bool)`

GetMembershipEnrollmentCodeOk returns a tuple with the MembershipEnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCode

`func (o *StagedProfileMembershipType) SetMembershipEnrollmentCode(v string)`

SetMembershipEnrollmentCode sets MembershipEnrollmentCode field to given value.

### HasMembershipEnrollmentCode

`func (o *StagedProfileMembershipType) HasMembershipEnrollmentCode() bool`

HasMembershipEnrollmentCode returns a boolean if a field has been set.

### GetMembershipId

`func (o *StagedProfileMembershipType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *StagedProfileMembershipType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *StagedProfileMembershipType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *StagedProfileMembershipType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *StagedProfileMembershipType) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *StagedProfileMembershipType) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *StagedProfileMembershipType) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *StagedProfileMembershipType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *StagedProfileMembershipType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *StagedProfileMembershipType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *StagedProfileMembershipType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *StagedProfileMembershipType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipLevelDescription

`func (o *StagedProfileMembershipType) GetMembershipLevelDescription() string`

GetMembershipLevelDescription returns the MembershipLevelDescription field if non-nil, zero value otherwise.

### GetMembershipLevelDescriptionOk

`func (o *StagedProfileMembershipType) GetMembershipLevelDescriptionOk() (*string, bool)`

GetMembershipLevelDescriptionOk returns a tuple with the MembershipLevelDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelDescription

`func (o *StagedProfileMembershipType) SetMembershipLevelDescription(v string)`

SetMembershipLevelDescription sets MembershipLevelDescription field to given value.

### HasMembershipLevelDescription

`func (o *StagedProfileMembershipType) HasMembershipLevelDescription() bool`

HasMembershipLevelDescription returns a boolean if a field has been set.

### GetMembershipStatus

`func (o *StagedProfileMembershipType) GetMembershipStatus() string`

GetMembershipStatus returns the MembershipStatus field if non-nil, zero value otherwise.

### GetMembershipStatusOk

`func (o *StagedProfileMembershipType) GetMembershipStatusOk() (*string, bool)`

GetMembershipStatusOk returns a tuple with the MembershipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipStatus

`func (o *StagedProfileMembershipType) SetMembershipStatus(v string)`

SetMembershipStatus sets MembershipStatus field to given value.

### HasMembershipStatus

`func (o *StagedProfileMembershipType) HasMembershipStatus() bool`

HasMembershipStatus returns a boolean if a field has been set.

### GetMembershipType

`func (o *StagedProfileMembershipType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *StagedProfileMembershipType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *StagedProfileMembershipType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *StagedProfileMembershipType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetNameOnCard

`func (o *StagedProfileMembershipType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *StagedProfileMembershipType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *StagedProfileMembershipType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *StagedProfileMembershipType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.

### GetNewMembershipNumber

`func (o *StagedProfileMembershipType) GetNewMembershipNumber() string`

GetNewMembershipNumber returns the NewMembershipNumber field if non-nil, zero value otherwise.

### GetNewMembershipNumberOk

`func (o *StagedProfileMembershipType) GetNewMembershipNumberOk() (*string, bool)`

GetNewMembershipNumberOk returns a tuple with the NewMembershipNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMembershipNumber

`func (o *StagedProfileMembershipType) SetNewMembershipNumber(v string)`

SetNewMembershipNumber sets NewMembershipNumber field to given value.

### HasNewMembershipNumber

`func (o *StagedProfileMembershipType) HasNewMembershipNumber() bool`

HasNewMembershipNumber returns a boolean if a field has been set.

### GetOrderSequence

`func (o *StagedProfileMembershipType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *StagedProfileMembershipType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *StagedProfileMembershipType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *StagedProfileMembershipType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPlayerRanking

`func (o *StagedProfileMembershipType) GetPlayerRanking() int32`

GetPlayerRanking returns the PlayerRanking field if non-nil, zero value otherwise.

### GetPlayerRankingOk

`func (o *StagedProfileMembershipType) GetPlayerRankingOk() (*int32, bool)`

GetPlayerRankingOk returns a tuple with the PlayerRanking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayerRanking

`func (o *StagedProfileMembershipType) SetPlayerRanking(v int32)`

SetPlayerRanking sets PlayerRanking field to given value.

### HasPlayerRanking

`func (o *StagedProfileMembershipType) HasPlayerRanking() bool`

HasPlayerRanking returns a boolean if a field has been set.

### GetPointsLabel

`func (o *StagedProfileMembershipType) GetPointsLabel() string`

GetPointsLabel returns the PointsLabel field if non-nil, zero value otherwise.

### GetPointsLabelOk

`func (o *StagedProfileMembershipType) GetPointsLabelOk() (*string, bool)`

GetPointsLabelOk returns a tuple with the PointsLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsLabel

`func (o *StagedProfileMembershipType) SetPointsLabel(v string)`

SetPointsLabel sets PointsLabel field to given value.

### HasPointsLabel

`func (o *StagedProfileMembershipType) HasPointsLabel() bool`

HasPointsLabel returns a boolean if a field has been set.

### GetPreferredCard

`func (o *StagedProfileMembershipType) GetPreferredCard() bool`

GetPreferredCard returns the PreferredCard field if non-nil, zero value otherwise.

### GetPreferredCardOk

`func (o *StagedProfileMembershipType) GetPreferredCardOk() (*bool, bool)`

GetPreferredCardOk returns a tuple with the PreferredCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredCard

`func (o *StagedProfileMembershipType) SetPreferredCard(v bool)`

SetPreferredCard sets PreferredCard field to given value.

### HasPreferredCard

`func (o *StagedProfileMembershipType) HasPreferredCard() bool`

HasPreferredCard returns a boolean if a field has been set.

### GetPrimaryMembership

`func (o *StagedProfileMembershipType) GetPrimaryMembership() bool`

GetPrimaryMembership returns the PrimaryMembership field if non-nil, zero value otherwise.

### GetPrimaryMembershipOk

`func (o *StagedProfileMembershipType) GetPrimaryMembershipOk() (*bool, bool)`

GetPrimaryMembershipOk returns a tuple with the PrimaryMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembership

`func (o *StagedProfileMembershipType) SetPrimaryMembership(v bool)`

SetPrimaryMembership sets PrimaryMembership field to given value.

### HasPrimaryMembership

`func (o *StagedProfileMembershipType) HasPrimaryMembership() bool`

HasPrimaryMembership returns a boolean if a field has been set.

### GetPrimaryMembershipYn

`func (o *StagedProfileMembershipType) GetPrimaryMembershipYn() string`

GetPrimaryMembershipYn returns the PrimaryMembershipYn field if non-nil, zero value otherwise.

### GetPrimaryMembershipYnOk

`func (o *StagedProfileMembershipType) GetPrimaryMembershipYnOk() (*string, bool)`

GetPrimaryMembershipYnOk returns a tuple with the PrimaryMembershipYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembershipYn

`func (o *StagedProfileMembershipType) SetPrimaryMembershipYn(v string)`

SetPrimaryMembershipYn sets PrimaryMembershipYn field to given value.

### HasPrimaryMembershipYn

`func (o *StagedProfileMembershipType) HasPrimaryMembershipYn() bool`

HasPrimaryMembershipYn returns a boolean if a field has been set.

### GetProgramDescription

`func (o *StagedProfileMembershipType) GetProgramDescription() string`

GetProgramDescription returns the ProgramDescription field if non-nil, zero value otherwise.

### GetProgramDescriptionOk

`func (o *StagedProfileMembershipType) GetProgramDescriptionOk() (*string, bool)`

GetProgramDescriptionOk returns a tuple with the ProgramDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramDescription

`func (o *StagedProfileMembershipType) SetProgramDescription(v string)`

SetProgramDescription sets ProgramDescription field to given value.

### HasProgramDescription

`func (o *StagedProfileMembershipType) HasProgramDescription() bool`

HasProgramDescription returns a boolean if a field has been set.

### GetRating

`func (o *StagedProfileMembershipType) GetRating() string`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *StagedProfileMembershipType) GetRatingOk() (*string, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *StagedProfileMembershipType) SetRating(v string)`

SetRating sets Rating field to given value.

### HasRating

`func (o *StagedProfileMembershipType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetReIssueNewCard

`func (o *StagedProfileMembershipType) GetReIssueNewCard() CardReIssueType`

GetReIssueNewCard returns the ReIssueNewCard field if non-nil, zero value otherwise.

### GetReIssueNewCardOk

`func (o *StagedProfileMembershipType) GetReIssueNewCardOk() (*CardReIssueType, bool)`

GetReIssueNewCardOk returns a tuple with the ReIssueNewCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReIssueNewCard

`func (o *StagedProfileMembershipType) SetReIssueNewCard(v CardReIssueType)`

SetReIssueNewCard sets ReIssueNewCard field to given value.

### HasReIssueNewCard

`func (o *StagedProfileMembershipType) HasReIssueNewCard() bool`

HasReIssueNewCard returns a boolean if a field has been set.

### GetRegistrationResort

`func (o *StagedProfileMembershipType) GetRegistrationResort() string`

GetRegistrationResort returns the RegistrationResort field if non-nil, zero value otherwise.

### GetRegistrationResortOk

`func (o *StagedProfileMembershipType) GetRegistrationResortOk() (*string, bool)`

GetRegistrationResortOk returns a tuple with the RegistrationResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationResort

`func (o *StagedProfileMembershipType) SetRegistrationResort(v string)`

SetRegistrationResort sets RegistrationResort field to given value.

### HasRegistrationResort

`func (o *StagedProfileMembershipType) HasRegistrationResort() bool`

HasRegistrationResort returns a boolean if a field has been set.

### GetSignupDate

`func (o *StagedProfileMembershipType) GetSignupDate() string`

GetSignupDate returns the SignupDate field if non-nil, zero value otherwise.

### GetSignupDateOk

`func (o *StagedProfileMembershipType) GetSignupDateOk() (*string, bool)`

GetSignupDateOk returns a tuple with the SignupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignupDate

`func (o *StagedProfileMembershipType) SetSignupDate(v string)`

SetSignupDate sets SignupDate field to given value.

### HasSignupDate

`func (o *StagedProfileMembershipType) HasSignupDate() bool`

HasSignupDate returns a boolean if a field has been set.

### GetTierAdministration

`func (o *StagedProfileMembershipType) GetTierAdministration() TierAdministrationType`

GetTierAdministration returns the TierAdministration field if non-nil, zero value otherwise.

### GetTierAdministrationOk

`func (o *StagedProfileMembershipType) GetTierAdministrationOk() (*TierAdministrationType, bool)`

GetTierAdministrationOk returns a tuple with the TierAdministration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierAdministration

`func (o *StagedProfileMembershipType) SetTierAdministration(v TierAdministrationType)`

SetTierAdministration sets TierAdministration field to given value.

### HasTierAdministration

`func (o *StagedProfileMembershipType) HasTierAdministration() bool`

HasTierAdministration returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileMembershipType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileMembershipType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileMembershipType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileMembershipType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUpdateExistingMembership

`func (o *StagedProfileMembershipType) GetUpdateExistingMembership() bool`

GetUpdateExistingMembership returns the UpdateExistingMembership field if non-nil, zero value otherwise.

### GetUpdateExistingMembershipOk

`func (o *StagedProfileMembershipType) GetUpdateExistingMembershipOk() (*bool, bool)`

GetUpdateExistingMembershipOk returns a tuple with the UpdateExistingMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateExistingMembership

`func (o *StagedProfileMembershipType) SetUpdateExistingMembership(v bool)`

SetUpdateExistingMembership sets UpdateExistingMembership field to given value.

### HasUpdateExistingMembership

`func (o *StagedProfileMembershipType) HasUpdateExistingMembership() bool`

HasUpdateExistingMembership returns a boolean if a field has been set.

### GetUpgradeDescription

`func (o *StagedProfileMembershipType) GetUpgradeDescription() string`

GetUpgradeDescription returns the UpgradeDescription field if non-nil, zero value otherwise.

### GetUpgradeDescriptionOk

`func (o *StagedProfileMembershipType) GetUpgradeDescriptionOk() (*string, bool)`

GetUpgradeDescriptionOk returns a tuple with the UpgradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeDescription

`func (o *StagedProfileMembershipType) SetUpgradeDescription(v string)`

SetUpgradeDescription sets UpgradeDescription field to given value.

### HasUpgradeDescription

`func (o *StagedProfileMembershipType) HasUpgradeDescription() bool`

HasUpgradeDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


