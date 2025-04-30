# MembershipType

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
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 

## Methods

### NewMembershipType

`func NewMembershipType() *MembershipType`

NewMembershipType instantiates a new MembershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeWithDefaults

`func NewMembershipTypeWithDefaults() *MembershipType`

NewMembershipTypeWithDefaults instantiates a new MembershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *MembershipType) GetComment() ParagraphType`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *MembershipType) GetCommentOk() (*ParagraphType, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *MembershipType) SetComment(v ParagraphType)`

SetComment sets Comment field to given value.

### HasComment

`func (o *MembershipType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetNewMembershipNumber

`func (o *MembershipType) GetNewMembershipNumber() string`

GetNewMembershipNumber returns the NewMembershipNumber field if non-nil, zero value otherwise.

### GetNewMembershipNumberOk

`func (o *MembershipType) GetNewMembershipNumberOk() (*string, bool)`

GetNewMembershipNumberOk returns a tuple with the NewMembershipNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMembershipNumber

`func (o *MembershipType) SetNewMembershipNumber(v string)`

SetNewMembershipNumber sets NewMembershipNumber field to given value.

### HasNewMembershipNumber

`func (o *MembershipType) HasNewMembershipNumber() bool`

HasNewMembershipNumber returns a boolean if a field has been set.

### GetNameOnCard

`func (o *MembershipType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *MembershipType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *MembershipType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *MembershipType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.

### GetProgramDescription

`func (o *MembershipType) GetProgramDescription() string`

GetProgramDescription returns the ProgramDescription field if non-nil, zero value otherwise.

### GetProgramDescriptionOk

`func (o *MembershipType) GetProgramDescriptionOk() (*string, bool)`

GetProgramDescriptionOk returns a tuple with the ProgramDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramDescription

`func (o *MembershipType) SetProgramDescription(v string)`

SetProgramDescription sets ProgramDescription field to given value.

### HasProgramDescription

`func (o *MembershipType) HasProgramDescription() bool`

HasProgramDescription returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *MembershipType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *MembershipType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *MembershipType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *MembershipType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipLevelDescription

`func (o *MembershipType) GetMembershipLevelDescription() string`

GetMembershipLevelDescription returns the MembershipLevelDescription field if non-nil, zero value otherwise.

### GetMembershipLevelDescriptionOk

`func (o *MembershipType) GetMembershipLevelDescriptionOk() (*string, bool)`

GetMembershipLevelDescriptionOk returns a tuple with the MembershipLevelDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelDescription

`func (o *MembershipType) SetMembershipLevelDescription(v string)`

SetMembershipLevelDescription sets MembershipLevelDescription field to given value.

### HasMembershipLevelDescription

`func (o *MembershipType) HasMembershipLevelDescription() bool`

HasMembershipLevelDescription returns a boolean if a field has been set.

### GetMembershipClass

`func (o *MembershipType) GetMembershipClass() string`

GetMembershipClass returns the MembershipClass field if non-nil, zero value otherwise.

### GetMembershipClassOk

`func (o *MembershipType) GetMembershipClassOk() (*string, bool)`

GetMembershipClassOk returns a tuple with the MembershipClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClass

`func (o *MembershipType) SetMembershipClass(v string)`

SetMembershipClass sets MembershipClass field to given value.

### HasMembershipClass

`func (o *MembershipType) HasMembershipClass() bool`

HasMembershipClass returns a boolean if a field has been set.

### GetEarningPreference

`func (o *MembershipType) GetEarningPreference() MembershipEarningPreferenceType`

GetEarningPreference returns the EarningPreference field if non-nil, zero value otherwise.

### GetEarningPreferenceOk

`func (o *MembershipType) GetEarningPreferenceOk() (*MembershipEarningPreferenceType, bool)`

GetEarningPreferenceOk returns a tuple with the EarningPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarningPreference

`func (o *MembershipType) SetEarningPreference(v MembershipEarningPreferenceType)`

SetEarningPreference sets EarningPreference field to given value.

### HasEarningPreference

`func (o *MembershipType) HasEarningPreference() bool`

HasEarningPreference returns a boolean if a field has been set.

### GetInactive

`func (o *MembershipType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MembershipType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MembershipType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MembershipType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetBenefits

`func (o *MembershipType) GetBenefits() []BenefitType`

GetBenefits returns the Benefits field if non-nil, zero value otherwise.

### GetBenefitsOk

`func (o *MembershipType) GetBenefitsOk() (*[]BenefitType, bool)`

GetBenefitsOk returns a tuple with the Benefits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBenefits

`func (o *MembershipType) SetBenefits(v []BenefitType)`

SetBenefits sets Benefits field to given value.

### HasBenefits

`func (o *MembershipType) HasBenefits() bool`

HasBenefits returns a boolean if a field has been set.

### GetTierAdministration

`func (o *MembershipType) GetTierAdministration() TierAdministrationType`

GetTierAdministration returns the TierAdministration field if non-nil, zero value otherwise.

### GetTierAdministrationOk

`func (o *MembershipType) GetTierAdministrationOk() (*TierAdministrationType, bool)`

GetTierAdministrationOk returns a tuple with the TierAdministration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierAdministration

`func (o *MembershipType) SetTierAdministration(v TierAdministrationType)`

SetTierAdministration sets TierAdministration field to given value.

### HasTierAdministration

`func (o *MembershipType) HasTierAdministration() bool`

HasTierAdministration returns a boolean if a field has been set.

### GetDowngrade

`func (o *MembershipType) GetDowngrade() DowngradeType`

GetDowngrade returns the Downgrade field if non-nil, zero value otherwise.

### GetDowngradeOk

`func (o *MembershipType) GetDowngradeOk() (*DowngradeType, bool)`

GetDowngradeOk returns a tuple with the Downgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngrade

`func (o *MembershipType) SetDowngrade(v DowngradeType)`

SetDowngrade sets Downgrade field to given value.

### HasDowngrade

`func (o *MembershipType) HasDowngrade() bool`

HasDowngrade returns a boolean if a field has been set.

### GetReIssueNewCard

`func (o *MembershipType) GetReIssueNewCard() CardReIssueType`

GetReIssueNewCard returns the ReIssueNewCard field if non-nil, zero value otherwise.

### GetReIssueNewCardOk

`func (o *MembershipType) GetReIssueNewCardOk() (*CardReIssueType, bool)`

GetReIssueNewCardOk returns a tuple with the ReIssueNewCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReIssueNewCard

`func (o *MembershipType) SetReIssueNewCard(v CardReIssueType)`

SetReIssueNewCard sets ReIssueNewCard field to given value.

### HasReIssueNewCard

`func (o *MembershipType) HasReIssueNewCard() bool`

HasReIssueNewCard returns a boolean if a field has been set.

### GetExcludeFromBatch

`func (o *MembershipType) GetExcludeFromBatch() bool`

GetExcludeFromBatch returns the ExcludeFromBatch field if non-nil, zero value otherwise.

### GetExcludeFromBatchOk

`func (o *MembershipType) GetExcludeFromBatchOk() (*bool, bool)`

GetExcludeFromBatchOk returns a tuple with the ExcludeFromBatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromBatch

`func (o *MembershipType) SetExcludeFromBatch(v bool)`

SetExcludeFromBatch sets ExcludeFromBatch field to given value.

### HasExcludeFromBatch

`func (o *MembershipType) HasExcludeFromBatch() bool`

HasExcludeFromBatch returns a boolean if a field has been set.

### GetUpgradeDescription

`func (o *MembershipType) GetUpgradeDescription() string`

GetUpgradeDescription returns the UpgradeDescription field if non-nil, zero value otherwise.

### GetUpgradeDescriptionOk

`func (o *MembershipType) GetUpgradeDescriptionOk() (*string, bool)`

GetUpgradeDescriptionOk returns a tuple with the UpgradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeDescription

`func (o *MembershipType) SetUpgradeDescription(v string)`

SetUpgradeDescription sets UpgradeDescription field to given value.

### HasUpgradeDescription

`func (o *MembershipType) HasUpgradeDescription() bool`

HasUpgradeDescription returns a boolean if a field has been set.

### GetDowngradeDescription

`func (o *MembershipType) GetDowngradeDescription() string`

GetDowngradeDescription returns the DowngradeDescription field if non-nil, zero value otherwise.

### GetDowngradeDescriptionOk

`func (o *MembershipType) GetDowngradeDescriptionOk() (*string, bool)`

GetDowngradeDescriptionOk returns a tuple with the DowngradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradeDescription

`func (o *MembershipType) SetDowngradeDescription(v string)`

SetDowngradeDescription sets DowngradeDescription field to given value.

### HasDowngradeDescription

`func (o *MembershipType) HasDowngradeDescription() bool`

HasDowngradeDescription returns a boolean if a field has been set.

### GetRating

`func (o *MembershipType) GetRating() string`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *MembershipType) GetRatingOk() (*string, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *MembershipType) SetRating(v string)`

SetRating sets Rating field to given value.

### HasRating

`func (o *MembershipType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetMembershipEnrollmentCode

`func (o *MembershipType) GetMembershipEnrollmentCode() string`

GetMembershipEnrollmentCode returns the MembershipEnrollmentCode field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodeOk

`func (o *MembershipType) GetMembershipEnrollmentCodeOk() (*string, bool)`

GetMembershipEnrollmentCodeOk returns a tuple with the MembershipEnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCode

`func (o *MembershipType) SetMembershipEnrollmentCode(v string)`

SetMembershipEnrollmentCode sets MembershipEnrollmentCode field to given value.

### HasMembershipEnrollmentCode

`func (o *MembershipType) HasMembershipEnrollmentCode() bool`

HasMembershipEnrollmentCode returns a boolean if a field has been set.

### GetMemberStatus

`func (o *MembershipType) GetMemberStatus() string`

GetMemberStatus returns the MemberStatus field if non-nil, zero value otherwise.

### GetMemberStatusOk

`func (o *MembershipType) GetMemberStatusOk() (*string, bool)`

GetMemberStatusOk returns a tuple with the MemberStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberStatus

`func (o *MembershipType) SetMemberStatus(v string)`

SetMemberStatus sets MemberStatus field to given value.

### HasMemberStatus

`func (o *MembershipType) HasMemberStatus() bool`

HasMemberStatus returns a boolean if a field has been set.

### GetCurrentPoints

`func (o *MembershipType) GetCurrentPoints() float32`

GetCurrentPoints returns the CurrentPoints field if non-nil, zero value otherwise.

### GetCurrentPointsOk

`func (o *MembershipType) GetCurrentPointsOk() (*float32, bool)`

GetCurrentPointsOk returns a tuple with the CurrentPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPoints

`func (o *MembershipType) SetCurrentPoints(v float32)`

SetCurrentPoints sets CurrentPoints field to given value.

### HasCurrentPoints

`func (o *MembershipType) HasCurrentPoints() bool`

HasCurrentPoints returns a boolean if a field has been set.

### GetPointsLabel

`func (o *MembershipType) GetPointsLabel() string`

GetPointsLabel returns the PointsLabel field if non-nil, zero value otherwise.

### GetPointsLabelOk

`func (o *MembershipType) GetPointsLabelOk() (*string, bool)`

GetPointsLabelOk returns a tuple with the PointsLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsLabel

`func (o *MembershipType) SetPointsLabel(v string)`

SetPointsLabel sets PointsLabel field to given value.

### HasPointsLabel

`func (o *MembershipType) HasPointsLabel() bool`

HasPointsLabel returns a boolean if a field has been set.

### GetEnrollmentSource

`func (o *MembershipType) GetEnrollmentSource() string`

GetEnrollmentSource returns the EnrollmentSource field if non-nil, zero value otherwise.

### GetEnrollmentSourceOk

`func (o *MembershipType) GetEnrollmentSourceOk() (*string, bool)`

GetEnrollmentSourceOk returns a tuple with the EnrollmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentSource

`func (o *MembershipType) SetEnrollmentSource(v string)`

SetEnrollmentSource sets EnrollmentSource field to given value.

### HasEnrollmentSource

`func (o *MembershipType) HasEnrollmentSource() bool`

HasEnrollmentSource returns a boolean if a field has been set.

### GetEnrollmentResort

`func (o *MembershipType) GetEnrollmentResort() string`

GetEnrollmentResort returns the EnrollmentResort field if non-nil, zero value otherwise.

### GetEnrollmentResortOk

`func (o *MembershipType) GetEnrollmentResortOk() (*string, bool)`

GetEnrollmentResortOk returns a tuple with the EnrollmentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentResort

`func (o *MembershipType) SetEnrollmentResort(v string)`

SetEnrollmentResort sets EnrollmentResort field to given value.

### HasEnrollmentResort

`func (o *MembershipType) HasEnrollmentResort() bool`

HasEnrollmentResort returns a boolean if a field has been set.

### GetPreferredCard

`func (o *MembershipType) GetPreferredCard() bool`

GetPreferredCard returns the PreferredCard field if non-nil, zero value otherwise.

### GetPreferredCardOk

`func (o *MembershipType) GetPreferredCardOk() (*bool, bool)`

GetPreferredCardOk returns a tuple with the PreferredCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredCard

`func (o *MembershipType) SetPreferredCard(v bool)`

SetPreferredCard sets PreferredCard field to given value.

### HasPreferredCard

`func (o *MembershipType) HasPreferredCard() bool`

HasPreferredCard returns a boolean if a field has been set.

### GetMembershipId

`func (o *MembershipType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetPrimaryMembershipYn

`func (o *MembershipType) GetPrimaryMembershipYn() string`

GetPrimaryMembershipYn returns the PrimaryMembershipYn field if non-nil, zero value otherwise.

### GetPrimaryMembershipYnOk

`func (o *MembershipType) GetPrimaryMembershipYnOk() (*string, bool)`

GetPrimaryMembershipYnOk returns a tuple with the PrimaryMembershipYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembershipYn

`func (o *MembershipType) SetPrimaryMembershipYn(v string)`

SetPrimaryMembershipYn sets PrimaryMembershipYn field to given value.

### HasPrimaryMembershipYn

`func (o *MembershipType) HasPrimaryMembershipYn() bool`

HasPrimaryMembershipYn returns a boolean if a field has been set.

### GetPrimaryMembership

`func (o *MembershipType) GetPrimaryMembership() bool`

GetPrimaryMembership returns the PrimaryMembership field if non-nil, zero value otherwise.

### GetPrimaryMembershipOk

`func (o *MembershipType) GetPrimaryMembershipOk() (*bool, bool)`

GetPrimaryMembershipOk returns a tuple with the PrimaryMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembership

`func (o *MembershipType) SetPrimaryMembership(v bool)`

SetPrimaryMembership sets PrimaryMembership field to given value.

### HasPrimaryMembership

`func (o *MembershipType) HasPrimaryMembership() bool`

HasPrimaryMembership returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *MembershipType) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *MembershipType) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *MembershipType) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *MembershipType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetPlayerRanking

`func (o *MembershipType) GetPlayerRanking() int32`

GetPlayerRanking returns the PlayerRanking field if non-nil, zero value otherwise.

### GetPlayerRankingOk

`func (o *MembershipType) GetPlayerRankingOk() (*int32, bool)`

GetPlayerRankingOk returns a tuple with the PlayerRanking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayerRanking

`func (o *MembershipType) SetPlayerRanking(v int32)`

SetPlayerRanking sets PlayerRanking field to given value.

### HasPlayerRanking

`func (o *MembershipType) HasPlayerRanking() bool`

HasPlayerRanking returns a boolean if a field has been set.

### GetCentralSetup

`func (o *MembershipType) GetCentralSetup() bool`

GetCentralSetup returns the CentralSetup field if non-nil, zero value otherwise.

### GetCentralSetupOk

`func (o *MembershipType) GetCentralSetupOk() (*bool, bool)`

GetCentralSetupOk returns a tuple with the CentralSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralSetup

`func (o *MembershipType) SetCentralSetup(v bool)`

SetCentralSetup sets CentralSetup field to given value.

### HasCentralSetup

`func (o *MembershipType) HasCentralSetup() bool`

HasCentralSetup returns a boolean if a field has been set.

### GetSignupDate

`func (o *MembershipType) GetSignupDate() string`

GetSignupDate returns the SignupDate field if non-nil, zero value otherwise.

### GetSignupDateOk

`func (o *MembershipType) GetSignupDateOk() (*string, bool)`

GetSignupDateOk returns a tuple with the SignupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignupDate

`func (o *MembershipType) SetSignupDate(v string)`

SetSignupDate sets SignupDate field to given value.

### HasSignupDate

`func (o *MembershipType) HasSignupDate() bool`

HasSignupDate returns a boolean if a field has been set.

### GetEffectiveDate

`func (o *MembershipType) GetEffectiveDate() string`

GetEffectiveDate returns the EffectiveDate field if non-nil, zero value otherwise.

### GetEffectiveDateOk

`func (o *MembershipType) GetEffectiveDateOk() (*string, bool)`

GetEffectiveDateOk returns a tuple with the EffectiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveDate

`func (o *MembershipType) SetEffectiveDate(v string)`

SetEffectiveDate sets EffectiveDate field to given value.

### HasEffectiveDate

`func (o *MembershipType) HasEffectiveDate() bool`

HasEffectiveDate returns a boolean if a field has been set.

### GetExpireDate

`func (o *MembershipType) GetExpireDate() string`

GetExpireDate returns the ExpireDate field if non-nil, zero value otherwise.

### GetExpireDateOk

`func (o *MembershipType) GetExpireDateOk() (*string, bool)`

GetExpireDateOk returns a tuple with the ExpireDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDate

`func (o *MembershipType) SetExpireDate(v string)`

SetExpireDate sets ExpireDate field to given value.

### HasExpireDate

`func (o *MembershipType) HasExpireDate() bool`

HasExpireDate returns a boolean if a field has been set.

### GetExpireDateExclusiveIndicator

`func (o *MembershipType) GetExpireDateExclusiveIndicator() bool`

GetExpireDateExclusiveIndicator returns the ExpireDateExclusiveIndicator field if non-nil, zero value otherwise.

### GetExpireDateExclusiveIndicatorOk

`func (o *MembershipType) GetExpireDateExclusiveIndicatorOk() (*bool, bool)`

GetExpireDateExclusiveIndicatorOk returns a tuple with the ExpireDateExclusiveIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDateExclusiveIndicator

`func (o *MembershipType) SetExpireDateExclusiveIndicator(v bool)`

SetExpireDateExclusiveIndicator sets ExpireDateExclusiveIndicator field to given value.

### HasExpireDateExclusiveIndicator

`func (o *MembershipType) HasExpireDateExclusiveIndicator() bool`

HasExpireDateExclusiveIndicator returns a boolean if a field has been set.

### GetOrderSequence

`func (o *MembershipType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *MembershipType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *MembershipType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *MembershipType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *MembershipType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *MembershipType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *MembershipType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *MembershipType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *MembershipType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *MembershipType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *MembershipType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *MembershipType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *MembershipType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *MembershipType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *MembershipType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *MembershipType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *MembershipType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *MembershipType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *MembershipType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *MembershipType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *MembershipType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *MembershipType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *MembershipType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *MembershipType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


