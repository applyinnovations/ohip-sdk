# ProfileMembershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to [**ParagraphType**](ParagraphType.md) |  | [optional] 
**NewMembershipNumber** | Pointer to **string** | Card Number of the membership. | [optional] 
**NameOnCard** | Pointer to **string** | Name to be displayed on the membership card. | [optional] 
**ProgramDescription** | Pointer to **string** | Description of the membership program. | [optional] 
**MembershipLevel** | Pointer to **string** | Indicates the membership level. | [optional] 
**MembershipLevelDescription** | Pointer to **string** | Indicates the membership level description. | [optional] 
**MembershipClass** | Pointer to **string** | Indicates the membership class. | [optional] 
**EarningPreference** | Pointer to [**MembershipEarningPreferenceType**](MembershipEarningPreferenceType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether membership is active or inactive. | [optional] 
**Benefits** | Pointer to [**[]BenefitType**](BenefitType.md) | Basic information about membership benefit. | [optional] 
**TierAdministration** | Pointer to [**TierAdministrationType**](TierAdministrationType.md) |  | [optional] 
**Downgrade** | Pointer to [**DowngradeType**](DowngradeType.md) |  | [optional] 
**ReIssueNewCard** | Pointer to [**CardReIssueType**](CardReIssueType.md) |  | [optional] 
**ExcludeFromBatch** | Pointer to **bool** | True if you want to exclude the member from the Membership Fulfillment extract,the member&#39;s actions will not be included in the fulfillment extract until this value set to false. | [optional] 
**UpgradeDescription** | Pointer to **string** | Indicates Upgrade information which includes member&#39;s next tier level, requirements for the next upgrade. | [optional] 
**DowngradeDescription** | Pointer to **string** | Indicates information regarding the member&#39;s possible downgrades. | [optional] 
**Rating** | Pointer to **string** | Value Rating Type Description for this membership. | [optional] 
**MembershipEnrollmentCode** | Pointer to **string** | Indicates how the guest enrolled in the program. | [optional] 
**MemberStatus** | Pointer to **string** | Indicates where the guest is in the membership enrollment process. | [optional] 
**CurrentPoints** | Pointer to **float32** | Profile MemberShip Points. | [optional] 
**PointsLabel** | Pointer to **string** | Label used to refer to points for this membership type | [optional] 
**EnrollmentSource** | Pointer to **string** | Source from where the enrollment is done. | [optional] 
**EnrollmentResort** | Pointer to **string** | Resort/CRO where enrollment is done. | [optional] 
**PreferredCard** | Pointer to **bool** | Preferred Card. | [optional] 
**MembershipId** | Pointer to **string** | Card Number of the membership. | [optional] 
**MembershipType** | Pointer to **string** | Type of membership. | [optional] 
**PrimaryMembershipYn** | Pointer to **string** | Indicator if Membership is a Primary Membership. | [optional] 
**PrimaryMembership** | Pointer to **bool** | Boolean indicator set to True implies membership is a Primary Membership. | [optional] 
**MembershipIdNo** | Pointer to **int32** | Membership ID Number. | [optional] 
**PlayerRanking** | Pointer to **int32** | Ranking assigned to the Player Profile by the Gaming system. | [optional] 
**CentralSetup** | Pointer to **bool** | Indicates how the award points for this membership type will be managed. | [optional] 
**SignupDate** | Pointer to **string** | Indicates when the member signed up for the loyalty program. | [optional] 
**EffectiveDate** | Pointer to **string** | Indicates the starting date. | [optional] 
**ExpireDate** | Pointer to **string** | Indicates the ending date. | [optional] 
**ExpireDateExclusiveIndicator** | Pointer to **bool** | When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewProfileMembershipType

`func NewProfileMembershipType() *ProfileMembershipType`

NewProfileMembershipType instantiates a new ProfileMembershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileMembershipTypeWithDefaults

`func NewProfileMembershipTypeWithDefaults() *ProfileMembershipType`

NewProfileMembershipTypeWithDefaults instantiates a new ProfileMembershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ProfileMembershipType) GetComment() ParagraphType`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ProfileMembershipType) GetCommentOk() (*ParagraphType, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ProfileMembershipType) SetComment(v ParagraphType)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ProfileMembershipType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetNewMembershipNumber

`func (o *ProfileMembershipType) GetNewMembershipNumber() string`

GetNewMembershipNumber returns the NewMembershipNumber field if non-nil, zero value otherwise.

### GetNewMembershipNumberOk

`func (o *ProfileMembershipType) GetNewMembershipNumberOk() (*string, bool)`

GetNewMembershipNumberOk returns a tuple with the NewMembershipNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMembershipNumber

`func (o *ProfileMembershipType) SetNewMembershipNumber(v string)`

SetNewMembershipNumber sets NewMembershipNumber field to given value.

### HasNewMembershipNumber

`func (o *ProfileMembershipType) HasNewMembershipNumber() bool`

HasNewMembershipNumber returns a boolean if a field has been set.

### GetNameOnCard

`func (o *ProfileMembershipType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *ProfileMembershipType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *ProfileMembershipType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *ProfileMembershipType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.

### GetProgramDescription

`func (o *ProfileMembershipType) GetProgramDescription() string`

GetProgramDescription returns the ProgramDescription field if non-nil, zero value otherwise.

### GetProgramDescriptionOk

`func (o *ProfileMembershipType) GetProgramDescriptionOk() (*string, bool)`

GetProgramDescriptionOk returns a tuple with the ProgramDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramDescription

`func (o *ProfileMembershipType) SetProgramDescription(v string)`

SetProgramDescription sets ProgramDescription field to given value.

### HasProgramDescription

`func (o *ProfileMembershipType) HasProgramDescription() bool`

HasProgramDescription returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *ProfileMembershipType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *ProfileMembershipType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *ProfileMembershipType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *ProfileMembershipType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipLevelDescription

`func (o *ProfileMembershipType) GetMembershipLevelDescription() string`

GetMembershipLevelDescription returns the MembershipLevelDescription field if non-nil, zero value otherwise.

### GetMembershipLevelDescriptionOk

`func (o *ProfileMembershipType) GetMembershipLevelDescriptionOk() (*string, bool)`

GetMembershipLevelDescriptionOk returns a tuple with the MembershipLevelDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelDescription

`func (o *ProfileMembershipType) SetMembershipLevelDescription(v string)`

SetMembershipLevelDescription sets MembershipLevelDescription field to given value.

### HasMembershipLevelDescription

`func (o *ProfileMembershipType) HasMembershipLevelDescription() bool`

HasMembershipLevelDescription returns a boolean if a field has been set.

### GetMembershipClass

`func (o *ProfileMembershipType) GetMembershipClass() string`

GetMembershipClass returns the MembershipClass field if non-nil, zero value otherwise.

### GetMembershipClassOk

`func (o *ProfileMembershipType) GetMembershipClassOk() (*string, bool)`

GetMembershipClassOk returns a tuple with the MembershipClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClass

`func (o *ProfileMembershipType) SetMembershipClass(v string)`

SetMembershipClass sets MembershipClass field to given value.

### HasMembershipClass

`func (o *ProfileMembershipType) HasMembershipClass() bool`

HasMembershipClass returns a boolean if a field has been set.

### GetEarningPreference

`func (o *ProfileMembershipType) GetEarningPreference() MembershipEarningPreferenceType`

GetEarningPreference returns the EarningPreference field if non-nil, zero value otherwise.

### GetEarningPreferenceOk

`func (o *ProfileMembershipType) GetEarningPreferenceOk() (*MembershipEarningPreferenceType, bool)`

GetEarningPreferenceOk returns a tuple with the EarningPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarningPreference

`func (o *ProfileMembershipType) SetEarningPreference(v MembershipEarningPreferenceType)`

SetEarningPreference sets EarningPreference field to given value.

### HasEarningPreference

`func (o *ProfileMembershipType) HasEarningPreference() bool`

HasEarningPreference returns a boolean if a field has been set.

### GetInactive

`func (o *ProfileMembershipType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ProfileMembershipType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ProfileMembershipType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ProfileMembershipType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetBenefits

`func (o *ProfileMembershipType) GetBenefits() []BenefitType`

GetBenefits returns the Benefits field if non-nil, zero value otherwise.

### GetBenefitsOk

`func (o *ProfileMembershipType) GetBenefitsOk() (*[]BenefitType, bool)`

GetBenefitsOk returns a tuple with the Benefits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBenefits

`func (o *ProfileMembershipType) SetBenefits(v []BenefitType)`

SetBenefits sets Benefits field to given value.

### HasBenefits

`func (o *ProfileMembershipType) HasBenefits() bool`

HasBenefits returns a boolean if a field has been set.

### GetTierAdministration

`func (o *ProfileMembershipType) GetTierAdministration() TierAdministrationType`

GetTierAdministration returns the TierAdministration field if non-nil, zero value otherwise.

### GetTierAdministrationOk

`func (o *ProfileMembershipType) GetTierAdministrationOk() (*TierAdministrationType, bool)`

GetTierAdministrationOk returns a tuple with the TierAdministration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierAdministration

`func (o *ProfileMembershipType) SetTierAdministration(v TierAdministrationType)`

SetTierAdministration sets TierAdministration field to given value.

### HasTierAdministration

`func (o *ProfileMembershipType) HasTierAdministration() bool`

HasTierAdministration returns a boolean if a field has been set.

### GetDowngrade

`func (o *ProfileMembershipType) GetDowngrade() DowngradeType`

GetDowngrade returns the Downgrade field if non-nil, zero value otherwise.

### GetDowngradeOk

`func (o *ProfileMembershipType) GetDowngradeOk() (*DowngradeType, bool)`

GetDowngradeOk returns a tuple with the Downgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngrade

`func (o *ProfileMembershipType) SetDowngrade(v DowngradeType)`

SetDowngrade sets Downgrade field to given value.

### HasDowngrade

`func (o *ProfileMembershipType) HasDowngrade() bool`

HasDowngrade returns a boolean if a field has been set.

### GetReIssueNewCard

`func (o *ProfileMembershipType) GetReIssueNewCard() CardReIssueType`

GetReIssueNewCard returns the ReIssueNewCard field if non-nil, zero value otherwise.

### GetReIssueNewCardOk

`func (o *ProfileMembershipType) GetReIssueNewCardOk() (*CardReIssueType, bool)`

GetReIssueNewCardOk returns a tuple with the ReIssueNewCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReIssueNewCard

`func (o *ProfileMembershipType) SetReIssueNewCard(v CardReIssueType)`

SetReIssueNewCard sets ReIssueNewCard field to given value.

### HasReIssueNewCard

`func (o *ProfileMembershipType) HasReIssueNewCard() bool`

HasReIssueNewCard returns a boolean if a field has been set.

### GetExcludeFromBatch

`func (o *ProfileMembershipType) GetExcludeFromBatch() bool`

GetExcludeFromBatch returns the ExcludeFromBatch field if non-nil, zero value otherwise.

### GetExcludeFromBatchOk

`func (o *ProfileMembershipType) GetExcludeFromBatchOk() (*bool, bool)`

GetExcludeFromBatchOk returns a tuple with the ExcludeFromBatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromBatch

`func (o *ProfileMembershipType) SetExcludeFromBatch(v bool)`

SetExcludeFromBatch sets ExcludeFromBatch field to given value.

### HasExcludeFromBatch

`func (o *ProfileMembershipType) HasExcludeFromBatch() bool`

HasExcludeFromBatch returns a boolean if a field has been set.

### GetUpgradeDescription

`func (o *ProfileMembershipType) GetUpgradeDescription() string`

GetUpgradeDescription returns the UpgradeDescription field if non-nil, zero value otherwise.

### GetUpgradeDescriptionOk

`func (o *ProfileMembershipType) GetUpgradeDescriptionOk() (*string, bool)`

GetUpgradeDescriptionOk returns a tuple with the UpgradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeDescription

`func (o *ProfileMembershipType) SetUpgradeDescription(v string)`

SetUpgradeDescription sets UpgradeDescription field to given value.

### HasUpgradeDescription

`func (o *ProfileMembershipType) HasUpgradeDescription() bool`

HasUpgradeDescription returns a boolean if a field has been set.

### GetDowngradeDescription

`func (o *ProfileMembershipType) GetDowngradeDescription() string`

GetDowngradeDescription returns the DowngradeDescription field if non-nil, zero value otherwise.

### GetDowngradeDescriptionOk

`func (o *ProfileMembershipType) GetDowngradeDescriptionOk() (*string, bool)`

GetDowngradeDescriptionOk returns a tuple with the DowngradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradeDescription

`func (o *ProfileMembershipType) SetDowngradeDescription(v string)`

SetDowngradeDescription sets DowngradeDescription field to given value.

### HasDowngradeDescription

`func (o *ProfileMembershipType) HasDowngradeDescription() bool`

HasDowngradeDescription returns a boolean if a field has been set.

### GetRating

`func (o *ProfileMembershipType) GetRating() string`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *ProfileMembershipType) GetRatingOk() (*string, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *ProfileMembershipType) SetRating(v string)`

SetRating sets Rating field to given value.

### HasRating

`func (o *ProfileMembershipType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetMembershipEnrollmentCode

`func (o *ProfileMembershipType) GetMembershipEnrollmentCode() string`

GetMembershipEnrollmentCode returns the MembershipEnrollmentCode field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodeOk

`func (o *ProfileMembershipType) GetMembershipEnrollmentCodeOk() (*string, bool)`

GetMembershipEnrollmentCodeOk returns a tuple with the MembershipEnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCode

`func (o *ProfileMembershipType) SetMembershipEnrollmentCode(v string)`

SetMembershipEnrollmentCode sets MembershipEnrollmentCode field to given value.

### HasMembershipEnrollmentCode

`func (o *ProfileMembershipType) HasMembershipEnrollmentCode() bool`

HasMembershipEnrollmentCode returns a boolean if a field has been set.

### GetMemberStatus

`func (o *ProfileMembershipType) GetMemberStatus() string`

GetMemberStatus returns the MemberStatus field if non-nil, zero value otherwise.

### GetMemberStatusOk

`func (o *ProfileMembershipType) GetMemberStatusOk() (*string, bool)`

GetMemberStatusOk returns a tuple with the MemberStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberStatus

`func (o *ProfileMembershipType) SetMemberStatus(v string)`

SetMemberStatus sets MemberStatus field to given value.

### HasMemberStatus

`func (o *ProfileMembershipType) HasMemberStatus() bool`

HasMemberStatus returns a boolean if a field has been set.

### GetCurrentPoints

`func (o *ProfileMembershipType) GetCurrentPoints() float32`

GetCurrentPoints returns the CurrentPoints field if non-nil, zero value otherwise.

### GetCurrentPointsOk

`func (o *ProfileMembershipType) GetCurrentPointsOk() (*float32, bool)`

GetCurrentPointsOk returns a tuple with the CurrentPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPoints

`func (o *ProfileMembershipType) SetCurrentPoints(v float32)`

SetCurrentPoints sets CurrentPoints field to given value.

### HasCurrentPoints

`func (o *ProfileMembershipType) HasCurrentPoints() bool`

HasCurrentPoints returns a boolean if a field has been set.

### GetPointsLabel

`func (o *ProfileMembershipType) GetPointsLabel() string`

GetPointsLabel returns the PointsLabel field if non-nil, zero value otherwise.

### GetPointsLabelOk

`func (o *ProfileMembershipType) GetPointsLabelOk() (*string, bool)`

GetPointsLabelOk returns a tuple with the PointsLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsLabel

`func (o *ProfileMembershipType) SetPointsLabel(v string)`

SetPointsLabel sets PointsLabel field to given value.

### HasPointsLabel

`func (o *ProfileMembershipType) HasPointsLabel() bool`

HasPointsLabel returns a boolean if a field has been set.

### GetEnrollmentSource

`func (o *ProfileMembershipType) GetEnrollmentSource() string`

GetEnrollmentSource returns the EnrollmentSource field if non-nil, zero value otherwise.

### GetEnrollmentSourceOk

`func (o *ProfileMembershipType) GetEnrollmentSourceOk() (*string, bool)`

GetEnrollmentSourceOk returns a tuple with the EnrollmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentSource

`func (o *ProfileMembershipType) SetEnrollmentSource(v string)`

SetEnrollmentSource sets EnrollmentSource field to given value.

### HasEnrollmentSource

`func (o *ProfileMembershipType) HasEnrollmentSource() bool`

HasEnrollmentSource returns a boolean if a field has been set.

### GetEnrollmentResort

`func (o *ProfileMembershipType) GetEnrollmentResort() string`

GetEnrollmentResort returns the EnrollmentResort field if non-nil, zero value otherwise.

### GetEnrollmentResortOk

`func (o *ProfileMembershipType) GetEnrollmentResortOk() (*string, bool)`

GetEnrollmentResortOk returns a tuple with the EnrollmentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentResort

`func (o *ProfileMembershipType) SetEnrollmentResort(v string)`

SetEnrollmentResort sets EnrollmentResort field to given value.

### HasEnrollmentResort

`func (o *ProfileMembershipType) HasEnrollmentResort() bool`

HasEnrollmentResort returns a boolean if a field has been set.

### GetPreferredCard

`func (o *ProfileMembershipType) GetPreferredCard() bool`

GetPreferredCard returns the PreferredCard field if non-nil, zero value otherwise.

### GetPreferredCardOk

`func (o *ProfileMembershipType) GetPreferredCardOk() (*bool, bool)`

GetPreferredCardOk returns a tuple with the PreferredCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredCard

`func (o *ProfileMembershipType) SetPreferredCard(v bool)`

SetPreferredCard sets PreferredCard field to given value.

### HasPreferredCard

`func (o *ProfileMembershipType) HasPreferredCard() bool`

HasPreferredCard returns a boolean if a field has been set.

### GetMembershipId

`func (o *ProfileMembershipType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ProfileMembershipType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ProfileMembershipType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ProfileMembershipType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipType

`func (o *ProfileMembershipType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ProfileMembershipType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ProfileMembershipType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ProfileMembershipType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetPrimaryMembershipYn

`func (o *ProfileMembershipType) GetPrimaryMembershipYn() string`

GetPrimaryMembershipYn returns the PrimaryMembershipYn field if non-nil, zero value otherwise.

### GetPrimaryMembershipYnOk

`func (o *ProfileMembershipType) GetPrimaryMembershipYnOk() (*string, bool)`

GetPrimaryMembershipYnOk returns a tuple with the PrimaryMembershipYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembershipYn

`func (o *ProfileMembershipType) SetPrimaryMembershipYn(v string)`

SetPrimaryMembershipYn sets PrimaryMembershipYn field to given value.

### HasPrimaryMembershipYn

`func (o *ProfileMembershipType) HasPrimaryMembershipYn() bool`

HasPrimaryMembershipYn returns a boolean if a field has been set.

### GetPrimaryMembership

`func (o *ProfileMembershipType) GetPrimaryMembership() bool`

GetPrimaryMembership returns the PrimaryMembership field if non-nil, zero value otherwise.

### GetPrimaryMembershipOk

`func (o *ProfileMembershipType) GetPrimaryMembershipOk() (*bool, bool)`

GetPrimaryMembershipOk returns a tuple with the PrimaryMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembership

`func (o *ProfileMembershipType) SetPrimaryMembership(v bool)`

SetPrimaryMembership sets PrimaryMembership field to given value.

### HasPrimaryMembership

`func (o *ProfileMembershipType) HasPrimaryMembership() bool`

HasPrimaryMembership returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *ProfileMembershipType) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *ProfileMembershipType) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *ProfileMembershipType) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *ProfileMembershipType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetPlayerRanking

`func (o *ProfileMembershipType) GetPlayerRanking() int32`

GetPlayerRanking returns the PlayerRanking field if non-nil, zero value otherwise.

### GetPlayerRankingOk

`func (o *ProfileMembershipType) GetPlayerRankingOk() (*int32, bool)`

GetPlayerRankingOk returns a tuple with the PlayerRanking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayerRanking

`func (o *ProfileMembershipType) SetPlayerRanking(v int32)`

SetPlayerRanking sets PlayerRanking field to given value.

### HasPlayerRanking

`func (o *ProfileMembershipType) HasPlayerRanking() bool`

HasPlayerRanking returns a boolean if a field has been set.

### GetCentralSetup

`func (o *ProfileMembershipType) GetCentralSetup() bool`

GetCentralSetup returns the CentralSetup field if non-nil, zero value otherwise.

### GetCentralSetupOk

`func (o *ProfileMembershipType) GetCentralSetupOk() (*bool, bool)`

GetCentralSetupOk returns a tuple with the CentralSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralSetup

`func (o *ProfileMembershipType) SetCentralSetup(v bool)`

SetCentralSetup sets CentralSetup field to given value.

### HasCentralSetup

`func (o *ProfileMembershipType) HasCentralSetup() bool`

HasCentralSetup returns a boolean if a field has been set.

### GetSignupDate

`func (o *ProfileMembershipType) GetSignupDate() string`

GetSignupDate returns the SignupDate field if non-nil, zero value otherwise.

### GetSignupDateOk

`func (o *ProfileMembershipType) GetSignupDateOk() (*string, bool)`

GetSignupDateOk returns a tuple with the SignupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignupDate

`func (o *ProfileMembershipType) SetSignupDate(v string)`

SetSignupDate sets SignupDate field to given value.

### HasSignupDate

`func (o *ProfileMembershipType) HasSignupDate() bool`

HasSignupDate returns a boolean if a field has been set.

### GetEffectiveDate

`func (o *ProfileMembershipType) GetEffectiveDate() string`

GetEffectiveDate returns the EffectiveDate field if non-nil, zero value otherwise.

### GetEffectiveDateOk

`func (o *ProfileMembershipType) GetEffectiveDateOk() (*string, bool)`

GetEffectiveDateOk returns a tuple with the EffectiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveDate

`func (o *ProfileMembershipType) SetEffectiveDate(v string)`

SetEffectiveDate sets EffectiveDate field to given value.

### HasEffectiveDate

`func (o *ProfileMembershipType) HasEffectiveDate() bool`

HasEffectiveDate returns a boolean if a field has been set.

### GetExpireDate

`func (o *ProfileMembershipType) GetExpireDate() string`

GetExpireDate returns the ExpireDate field if non-nil, zero value otherwise.

### GetExpireDateOk

`func (o *ProfileMembershipType) GetExpireDateOk() (*string, bool)`

GetExpireDateOk returns a tuple with the ExpireDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDate

`func (o *ProfileMembershipType) SetExpireDate(v string)`

SetExpireDate sets ExpireDate field to given value.

### HasExpireDate

`func (o *ProfileMembershipType) HasExpireDate() bool`

HasExpireDate returns a boolean if a field has been set.

### GetExpireDateExclusiveIndicator

`func (o *ProfileMembershipType) GetExpireDateExclusiveIndicator() bool`

GetExpireDateExclusiveIndicator returns the ExpireDateExclusiveIndicator field if non-nil, zero value otherwise.

### GetExpireDateExclusiveIndicatorOk

`func (o *ProfileMembershipType) GetExpireDateExclusiveIndicatorOk() (*bool, bool)`

GetExpireDateExclusiveIndicatorOk returns a tuple with the ExpireDateExclusiveIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDateExclusiveIndicator

`func (o *ProfileMembershipType) SetExpireDateExclusiveIndicator(v bool)`

SetExpireDateExclusiveIndicator sets ExpireDateExclusiveIndicator field to given value.

### HasExpireDateExclusiveIndicator

`func (o *ProfileMembershipType) HasExpireDateExclusiveIndicator() bool`

HasExpireDateExclusiveIndicator returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ProfileMembershipType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ProfileMembershipType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ProfileMembershipType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ProfileMembershipType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ProfileMembershipType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ProfileMembershipType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ProfileMembershipType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ProfileMembershipType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ProfileMembershipType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ProfileMembershipType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ProfileMembershipType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ProfileMembershipType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ProfileMembershipType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ProfileMembershipType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ProfileMembershipType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ProfileMembershipType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ProfileMembershipType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ProfileMembershipType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ProfileMembershipType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ProfileMembershipType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


