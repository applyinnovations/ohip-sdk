# ReservationMembershipType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Benefits** | Pointer to [**BenefitsType**](BenefitsType.md) |  | [optional] 
**CentralSetup** | Pointer to **bool** | Indicates how the award points for this membership type will be managed. | [optional] 
**Comment** | Pointer to [**ParagraphType**](ParagraphType.md) |  | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**CurrentPoints** | Pointer to **float32** | Profile MemberShip Points. | [optional] 
**Downgrade** | Pointer to [**DowngradeType**](DowngradeType.md) |  | [optional] 
**DowngradeDescription** | Pointer to **string** | Indicates information regarding the member&#39;s possible downgrades. | [optional] 
**EarningPreference** | Pointer to [**MembershipEarningPreferenceType**](MembershipEarningPreferenceType.md) |  | [optional] 
**EffectiveDate** | Pointer to **string** | Indicates the starting date. | [optional] 
**EnrollmentResort** | Pointer to **string** | Resort/CRO where enrollment is done. | [optional] 
**EnrollmentSource** | Pointer to **string** | Source from where the enrollment is done. | [optional] 
**ExcludeFromBatch** | Pointer to **bool** | True if you want to exclude the member from the Membership Fulfillment extract,the member&#39;s actions will not be included in the fulfillment extract until this value set to false. | [optional] 
**ExpireDate** | Pointer to **string** | Indicates the ending date. | [optional] 
**ExpireDateExclusiveIndicator** | Pointer to **bool** | When true, indicates that the ExpireDate is the first day after the applicable period (e.g. when expire date is Oct 15 the last date of the period is Oct 14). | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether membership is active or inactive. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LinkMembership** | Pointer to **bool** |  | [optional] 
**MemberStatus** | Pointer to **string** | Indicates where the guest is in the membership enrollment process. | [optional] 
**MembershipClass** | Pointer to **string** | Indicates the membership class. | [optional] 
**MembershipEnrollmentCode** | Pointer to **string** | Indicates how the guest enrolled in the program. | [optional] 
**MembershipId** | Pointer to **string** | Card Number of the membership. | [optional] 
**MembershipIdNo** | Pointer to **int32** | Membership ID Number. | [optional] 
**MembershipLevel** | Pointer to **string** | Indicates the membership level. | [optional] 
**MembershipLevelDescription** | Pointer to **string** | Indicates the membership level description. | [optional] 
**MembershipType** | Pointer to **string** | Type of membership. | [optional] 
**NameOnCard** | Pointer to **string** | Name to be displayed on the membership card. | [optional] 
**NewMembershipNumber** | Pointer to **string** | Card Number of the membership. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PlayerRanking** | Pointer to **int32** | Ranking assigned to the Player Profile by the Gaming system. | [optional] 
**PointsLabel** | Pointer to **string** | Label used to refer to points for this membership type | [optional] 
**PreferredCard** | Pointer to **bool** | Preferred Card. | [optional] 
**Primary** | Pointer to **bool** |  | [optional] 
**PrimaryMembership** | Pointer to **bool** | Boolean indicator set to True implies membership is a Primary Membership. | [optional] 
**PrimaryMembershipYn** | Pointer to **string** | Indicator if Membership is a Primary Membership. | [optional] 
**ProgramDescription** | Pointer to **string** | Description of the membership program. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Rating** | Pointer to **string** | Value Rating Type Description for this membership. | [optional] 
**ReIssueNewCard** | Pointer to [**CardReIssueType**](CardReIssueType.md) |  | [optional] 
**SignupDate** | Pointer to **string** | Indicates when the member signed up for the loyalty program. | [optional] 
**TierAdministration** | Pointer to [**TierAdministrationType**](TierAdministrationType.md) |  | [optional] 
**UpgradeDescription** | Pointer to **string** | Indicates Upgrade information which includes member&#39;s next tier level, requirements for the next upgrade. | [optional] 

## Methods

### NewReservationMembershipType

`func NewReservationMembershipType() *ReservationMembershipType`

NewReservationMembershipType instantiates a new ReservationMembershipType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationMembershipTypeWithDefaults

`func NewReservationMembershipTypeWithDefaults() *ReservationMembershipType`

NewReservationMembershipTypeWithDefaults instantiates a new ReservationMembershipType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBenefits

`func (o *ReservationMembershipType) GetBenefits() BenefitsType`

GetBenefits returns the Benefits field if non-nil, zero value otherwise.

### GetBenefitsOk

`func (o *ReservationMembershipType) GetBenefitsOk() (*BenefitsType, bool)`

GetBenefitsOk returns a tuple with the Benefits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBenefits

`func (o *ReservationMembershipType) SetBenefits(v BenefitsType)`

SetBenefits sets Benefits field to given value.

### HasBenefits

`func (o *ReservationMembershipType) HasBenefits() bool`

HasBenefits returns a boolean if a field has been set.

### GetCentralSetup

`func (o *ReservationMembershipType) GetCentralSetup() bool`

GetCentralSetup returns the CentralSetup field if non-nil, zero value otherwise.

### GetCentralSetupOk

`func (o *ReservationMembershipType) GetCentralSetupOk() (*bool, bool)`

GetCentralSetupOk returns a tuple with the CentralSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCentralSetup

`func (o *ReservationMembershipType) SetCentralSetup(v bool)`

SetCentralSetup sets CentralSetup field to given value.

### HasCentralSetup

`func (o *ReservationMembershipType) HasCentralSetup() bool`

HasCentralSetup returns a boolean if a field has been set.

### GetComment

`func (o *ReservationMembershipType) GetComment() ParagraphType`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ReservationMembershipType) GetCommentOk() (*ParagraphType, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ReservationMembershipType) SetComment(v ParagraphType)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ReservationMembershipType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ReservationMembershipType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ReservationMembershipType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ReservationMembershipType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ReservationMembershipType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ReservationMembershipType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ReservationMembershipType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ReservationMembershipType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ReservationMembershipType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetCurrentPoints

`func (o *ReservationMembershipType) GetCurrentPoints() float32`

GetCurrentPoints returns the CurrentPoints field if non-nil, zero value otherwise.

### GetCurrentPointsOk

`func (o *ReservationMembershipType) GetCurrentPointsOk() (*float32, bool)`

GetCurrentPointsOk returns a tuple with the CurrentPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentPoints

`func (o *ReservationMembershipType) SetCurrentPoints(v float32)`

SetCurrentPoints sets CurrentPoints field to given value.

### HasCurrentPoints

`func (o *ReservationMembershipType) HasCurrentPoints() bool`

HasCurrentPoints returns a boolean if a field has been set.

### GetDowngrade

`func (o *ReservationMembershipType) GetDowngrade() DowngradeType`

GetDowngrade returns the Downgrade field if non-nil, zero value otherwise.

### GetDowngradeOk

`func (o *ReservationMembershipType) GetDowngradeOk() (*DowngradeType, bool)`

GetDowngradeOk returns a tuple with the Downgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngrade

`func (o *ReservationMembershipType) SetDowngrade(v DowngradeType)`

SetDowngrade sets Downgrade field to given value.

### HasDowngrade

`func (o *ReservationMembershipType) HasDowngrade() bool`

HasDowngrade returns a boolean if a field has been set.

### GetDowngradeDescription

`func (o *ReservationMembershipType) GetDowngradeDescription() string`

GetDowngradeDescription returns the DowngradeDescription field if non-nil, zero value otherwise.

### GetDowngradeDescriptionOk

`func (o *ReservationMembershipType) GetDowngradeDescriptionOk() (*string, bool)`

GetDowngradeDescriptionOk returns a tuple with the DowngradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDowngradeDescription

`func (o *ReservationMembershipType) SetDowngradeDescription(v string)`

SetDowngradeDescription sets DowngradeDescription field to given value.

### HasDowngradeDescription

`func (o *ReservationMembershipType) HasDowngradeDescription() bool`

HasDowngradeDescription returns a boolean if a field has been set.

### GetEarningPreference

`func (o *ReservationMembershipType) GetEarningPreference() MembershipEarningPreferenceType`

GetEarningPreference returns the EarningPreference field if non-nil, zero value otherwise.

### GetEarningPreferenceOk

`func (o *ReservationMembershipType) GetEarningPreferenceOk() (*MembershipEarningPreferenceType, bool)`

GetEarningPreferenceOk returns a tuple with the EarningPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEarningPreference

`func (o *ReservationMembershipType) SetEarningPreference(v MembershipEarningPreferenceType)`

SetEarningPreference sets EarningPreference field to given value.

### HasEarningPreference

`func (o *ReservationMembershipType) HasEarningPreference() bool`

HasEarningPreference returns a boolean if a field has been set.

### GetEffectiveDate

`func (o *ReservationMembershipType) GetEffectiveDate() string`

GetEffectiveDate returns the EffectiveDate field if non-nil, zero value otherwise.

### GetEffectiveDateOk

`func (o *ReservationMembershipType) GetEffectiveDateOk() (*string, bool)`

GetEffectiveDateOk returns a tuple with the EffectiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveDate

`func (o *ReservationMembershipType) SetEffectiveDate(v string)`

SetEffectiveDate sets EffectiveDate field to given value.

### HasEffectiveDate

`func (o *ReservationMembershipType) HasEffectiveDate() bool`

HasEffectiveDate returns a boolean if a field has been set.

### GetEnrollmentResort

`func (o *ReservationMembershipType) GetEnrollmentResort() string`

GetEnrollmentResort returns the EnrollmentResort field if non-nil, zero value otherwise.

### GetEnrollmentResortOk

`func (o *ReservationMembershipType) GetEnrollmentResortOk() (*string, bool)`

GetEnrollmentResortOk returns a tuple with the EnrollmentResort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentResort

`func (o *ReservationMembershipType) SetEnrollmentResort(v string)`

SetEnrollmentResort sets EnrollmentResort field to given value.

### HasEnrollmentResort

`func (o *ReservationMembershipType) HasEnrollmentResort() bool`

HasEnrollmentResort returns a boolean if a field has been set.

### GetEnrollmentSource

`func (o *ReservationMembershipType) GetEnrollmentSource() string`

GetEnrollmentSource returns the EnrollmentSource field if non-nil, zero value otherwise.

### GetEnrollmentSourceOk

`func (o *ReservationMembershipType) GetEnrollmentSourceOk() (*string, bool)`

GetEnrollmentSourceOk returns a tuple with the EnrollmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrollmentSource

`func (o *ReservationMembershipType) SetEnrollmentSource(v string)`

SetEnrollmentSource sets EnrollmentSource field to given value.

### HasEnrollmentSource

`func (o *ReservationMembershipType) HasEnrollmentSource() bool`

HasEnrollmentSource returns a boolean if a field has been set.

### GetExcludeFromBatch

`func (o *ReservationMembershipType) GetExcludeFromBatch() bool`

GetExcludeFromBatch returns the ExcludeFromBatch field if non-nil, zero value otherwise.

### GetExcludeFromBatchOk

`func (o *ReservationMembershipType) GetExcludeFromBatchOk() (*bool, bool)`

GetExcludeFromBatchOk returns a tuple with the ExcludeFromBatch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromBatch

`func (o *ReservationMembershipType) SetExcludeFromBatch(v bool)`

SetExcludeFromBatch sets ExcludeFromBatch field to given value.

### HasExcludeFromBatch

`func (o *ReservationMembershipType) HasExcludeFromBatch() bool`

HasExcludeFromBatch returns a boolean if a field has been set.

### GetExpireDate

`func (o *ReservationMembershipType) GetExpireDate() string`

GetExpireDate returns the ExpireDate field if non-nil, zero value otherwise.

### GetExpireDateOk

`func (o *ReservationMembershipType) GetExpireDateOk() (*string, bool)`

GetExpireDateOk returns a tuple with the ExpireDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDate

`func (o *ReservationMembershipType) SetExpireDate(v string)`

SetExpireDate sets ExpireDate field to given value.

### HasExpireDate

`func (o *ReservationMembershipType) HasExpireDate() bool`

HasExpireDate returns a boolean if a field has been set.

### GetExpireDateExclusiveIndicator

`func (o *ReservationMembershipType) GetExpireDateExclusiveIndicator() bool`

GetExpireDateExclusiveIndicator returns the ExpireDateExclusiveIndicator field if non-nil, zero value otherwise.

### GetExpireDateExclusiveIndicatorOk

`func (o *ReservationMembershipType) GetExpireDateExclusiveIndicatorOk() (*bool, bool)`

GetExpireDateExclusiveIndicatorOk returns a tuple with the ExpireDateExclusiveIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpireDateExclusiveIndicator

`func (o *ReservationMembershipType) SetExpireDateExclusiveIndicator(v bool)`

SetExpireDateExclusiveIndicator sets ExpireDateExclusiveIndicator field to given value.

### HasExpireDateExclusiveIndicator

`func (o *ReservationMembershipType) HasExpireDateExclusiveIndicator() bool`

HasExpireDateExclusiveIndicator returns a boolean if a field has been set.

### GetInactive

`func (o *ReservationMembershipType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ReservationMembershipType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ReservationMembershipType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ReservationMembershipType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ReservationMembershipType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ReservationMembershipType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ReservationMembershipType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ReservationMembershipType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ReservationMembershipType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ReservationMembershipType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ReservationMembershipType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ReservationMembershipType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLinkMembership

`func (o *ReservationMembershipType) GetLinkMembership() bool`

GetLinkMembership returns the LinkMembership field if non-nil, zero value otherwise.

### GetLinkMembershipOk

`func (o *ReservationMembershipType) GetLinkMembershipOk() (*bool, bool)`

GetLinkMembershipOk returns a tuple with the LinkMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkMembership

`func (o *ReservationMembershipType) SetLinkMembership(v bool)`

SetLinkMembership sets LinkMembership field to given value.

### HasLinkMembership

`func (o *ReservationMembershipType) HasLinkMembership() bool`

HasLinkMembership returns a boolean if a field has been set.

### GetMemberStatus

`func (o *ReservationMembershipType) GetMemberStatus() string`

GetMemberStatus returns the MemberStatus field if non-nil, zero value otherwise.

### GetMemberStatusOk

`func (o *ReservationMembershipType) GetMemberStatusOk() (*string, bool)`

GetMemberStatusOk returns a tuple with the MemberStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberStatus

`func (o *ReservationMembershipType) SetMemberStatus(v string)`

SetMemberStatus sets MemberStatus field to given value.

### HasMemberStatus

`func (o *ReservationMembershipType) HasMemberStatus() bool`

HasMemberStatus returns a boolean if a field has been set.

### GetMembershipClass

`func (o *ReservationMembershipType) GetMembershipClass() string`

GetMembershipClass returns the MembershipClass field if non-nil, zero value otherwise.

### GetMembershipClassOk

`func (o *ReservationMembershipType) GetMembershipClassOk() (*string, bool)`

GetMembershipClassOk returns a tuple with the MembershipClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClass

`func (o *ReservationMembershipType) SetMembershipClass(v string)`

SetMembershipClass sets MembershipClass field to given value.

### HasMembershipClass

`func (o *ReservationMembershipType) HasMembershipClass() bool`

HasMembershipClass returns a boolean if a field has been set.

### GetMembershipEnrollmentCode

`func (o *ReservationMembershipType) GetMembershipEnrollmentCode() string`

GetMembershipEnrollmentCode returns the MembershipEnrollmentCode field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodeOk

`func (o *ReservationMembershipType) GetMembershipEnrollmentCodeOk() (*string, bool)`

GetMembershipEnrollmentCodeOk returns a tuple with the MembershipEnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCode

`func (o *ReservationMembershipType) SetMembershipEnrollmentCode(v string)`

SetMembershipEnrollmentCode sets MembershipEnrollmentCode field to given value.

### HasMembershipEnrollmentCode

`func (o *ReservationMembershipType) HasMembershipEnrollmentCode() bool`

HasMembershipEnrollmentCode returns a boolean if a field has been set.

### GetMembershipId

`func (o *ReservationMembershipType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *ReservationMembershipType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *ReservationMembershipType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *ReservationMembershipType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *ReservationMembershipType) GetMembershipIdNo() int32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *ReservationMembershipType) GetMembershipIdNoOk() (*int32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *ReservationMembershipType) SetMembershipIdNo(v int32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *ReservationMembershipType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *ReservationMembershipType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *ReservationMembershipType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *ReservationMembershipType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *ReservationMembershipType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetMembershipLevelDescription

`func (o *ReservationMembershipType) GetMembershipLevelDescription() string`

GetMembershipLevelDescription returns the MembershipLevelDescription field if non-nil, zero value otherwise.

### GetMembershipLevelDescriptionOk

`func (o *ReservationMembershipType) GetMembershipLevelDescriptionOk() (*string, bool)`

GetMembershipLevelDescriptionOk returns a tuple with the MembershipLevelDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevelDescription

`func (o *ReservationMembershipType) SetMembershipLevelDescription(v string)`

SetMembershipLevelDescription sets MembershipLevelDescription field to given value.

### HasMembershipLevelDescription

`func (o *ReservationMembershipType) HasMembershipLevelDescription() bool`

HasMembershipLevelDescription returns a boolean if a field has been set.

### GetMembershipType

`func (o *ReservationMembershipType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *ReservationMembershipType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *ReservationMembershipType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *ReservationMembershipType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetNameOnCard

`func (o *ReservationMembershipType) GetNameOnCard() string`

GetNameOnCard returns the NameOnCard field if non-nil, zero value otherwise.

### GetNameOnCardOk

`func (o *ReservationMembershipType) GetNameOnCardOk() (*string, bool)`

GetNameOnCardOk returns a tuple with the NameOnCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameOnCard

`func (o *ReservationMembershipType) SetNameOnCard(v string)`

SetNameOnCard sets NameOnCard field to given value.

### HasNameOnCard

`func (o *ReservationMembershipType) HasNameOnCard() bool`

HasNameOnCard returns a boolean if a field has been set.

### GetNewMembershipNumber

`func (o *ReservationMembershipType) GetNewMembershipNumber() string`

GetNewMembershipNumber returns the NewMembershipNumber field if non-nil, zero value otherwise.

### GetNewMembershipNumberOk

`func (o *ReservationMembershipType) GetNewMembershipNumberOk() (*string, bool)`

GetNewMembershipNumberOk returns a tuple with the NewMembershipNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewMembershipNumber

`func (o *ReservationMembershipType) SetNewMembershipNumber(v string)`

SetNewMembershipNumber sets NewMembershipNumber field to given value.

### HasNewMembershipNumber

`func (o *ReservationMembershipType) HasNewMembershipNumber() bool`

HasNewMembershipNumber returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ReservationMembershipType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ReservationMembershipType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ReservationMembershipType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ReservationMembershipType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPlayerRanking

`func (o *ReservationMembershipType) GetPlayerRanking() int32`

GetPlayerRanking returns the PlayerRanking field if non-nil, zero value otherwise.

### GetPlayerRankingOk

`func (o *ReservationMembershipType) GetPlayerRankingOk() (*int32, bool)`

GetPlayerRankingOk returns a tuple with the PlayerRanking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlayerRanking

`func (o *ReservationMembershipType) SetPlayerRanking(v int32)`

SetPlayerRanking sets PlayerRanking field to given value.

### HasPlayerRanking

`func (o *ReservationMembershipType) HasPlayerRanking() bool`

HasPlayerRanking returns a boolean if a field has been set.

### GetPointsLabel

`func (o *ReservationMembershipType) GetPointsLabel() string`

GetPointsLabel returns the PointsLabel field if non-nil, zero value otherwise.

### GetPointsLabelOk

`func (o *ReservationMembershipType) GetPointsLabelOk() (*string, bool)`

GetPointsLabelOk returns a tuple with the PointsLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsLabel

`func (o *ReservationMembershipType) SetPointsLabel(v string)`

SetPointsLabel sets PointsLabel field to given value.

### HasPointsLabel

`func (o *ReservationMembershipType) HasPointsLabel() bool`

HasPointsLabel returns a boolean if a field has been set.

### GetPreferredCard

`func (o *ReservationMembershipType) GetPreferredCard() bool`

GetPreferredCard returns the PreferredCard field if non-nil, zero value otherwise.

### GetPreferredCardOk

`func (o *ReservationMembershipType) GetPreferredCardOk() (*bool, bool)`

GetPreferredCardOk returns a tuple with the PreferredCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferredCard

`func (o *ReservationMembershipType) SetPreferredCard(v bool)`

SetPreferredCard sets PreferredCard field to given value.

### HasPreferredCard

`func (o *ReservationMembershipType) HasPreferredCard() bool`

HasPreferredCard returns a boolean if a field has been set.

### GetPrimary

`func (o *ReservationMembershipType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *ReservationMembershipType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *ReservationMembershipType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *ReservationMembershipType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetPrimaryMembership

`func (o *ReservationMembershipType) GetPrimaryMembership() bool`

GetPrimaryMembership returns the PrimaryMembership field if non-nil, zero value otherwise.

### GetPrimaryMembershipOk

`func (o *ReservationMembershipType) GetPrimaryMembershipOk() (*bool, bool)`

GetPrimaryMembershipOk returns a tuple with the PrimaryMembership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembership

`func (o *ReservationMembershipType) SetPrimaryMembership(v bool)`

SetPrimaryMembership sets PrimaryMembership field to given value.

### HasPrimaryMembership

`func (o *ReservationMembershipType) HasPrimaryMembership() bool`

HasPrimaryMembership returns a boolean if a field has been set.

### GetPrimaryMembershipYn

`func (o *ReservationMembershipType) GetPrimaryMembershipYn() string`

GetPrimaryMembershipYn returns the PrimaryMembershipYn field if non-nil, zero value otherwise.

### GetPrimaryMembershipYnOk

`func (o *ReservationMembershipType) GetPrimaryMembershipYnOk() (*string, bool)`

GetPrimaryMembershipYnOk returns a tuple with the PrimaryMembershipYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembershipYn

`func (o *ReservationMembershipType) SetPrimaryMembershipYn(v string)`

SetPrimaryMembershipYn sets PrimaryMembershipYn field to given value.

### HasPrimaryMembershipYn

`func (o *ReservationMembershipType) HasPrimaryMembershipYn() bool`

HasPrimaryMembershipYn returns a boolean if a field has been set.

### GetProgramDescription

`func (o *ReservationMembershipType) GetProgramDescription() string`

GetProgramDescription returns the ProgramDescription field if non-nil, zero value otherwise.

### GetProgramDescriptionOk

`func (o *ReservationMembershipType) GetProgramDescriptionOk() (*string, bool)`

GetProgramDescriptionOk returns a tuple with the ProgramDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProgramDescription

`func (o *ReservationMembershipType) SetProgramDescription(v string)`

SetProgramDescription sets ProgramDescription field to given value.

### HasProgramDescription

`func (o *ReservationMembershipType) HasProgramDescription() bool`

HasProgramDescription returns a boolean if a field has been set.

### GetPurgeDate

`func (o *ReservationMembershipType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *ReservationMembershipType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *ReservationMembershipType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *ReservationMembershipType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetRating

`func (o *ReservationMembershipType) GetRating() string`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *ReservationMembershipType) GetRatingOk() (*string, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *ReservationMembershipType) SetRating(v string)`

SetRating sets Rating field to given value.

### HasRating

`func (o *ReservationMembershipType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetReIssueNewCard

`func (o *ReservationMembershipType) GetReIssueNewCard() CardReIssueType`

GetReIssueNewCard returns the ReIssueNewCard field if non-nil, zero value otherwise.

### GetReIssueNewCardOk

`func (o *ReservationMembershipType) GetReIssueNewCardOk() (*CardReIssueType, bool)`

GetReIssueNewCardOk returns a tuple with the ReIssueNewCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReIssueNewCard

`func (o *ReservationMembershipType) SetReIssueNewCard(v CardReIssueType)`

SetReIssueNewCard sets ReIssueNewCard field to given value.

### HasReIssueNewCard

`func (o *ReservationMembershipType) HasReIssueNewCard() bool`

HasReIssueNewCard returns a boolean if a field has been set.

### GetSignupDate

`func (o *ReservationMembershipType) GetSignupDate() string`

GetSignupDate returns the SignupDate field if non-nil, zero value otherwise.

### GetSignupDateOk

`func (o *ReservationMembershipType) GetSignupDateOk() (*string, bool)`

GetSignupDateOk returns a tuple with the SignupDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignupDate

`func (o *ReservationMembershipType) SetSignupDate(v string)`

SetSignupDate sets SignupDate field to given value.

### HasSignupDate

`func (o *ReservationMembershipType) HasSignupDate() bool`

HasSignupDate returns a boolean if a field has been set.

### GetTierAdministration

`func (o *ReservationMembershipType) GetTierAdministration() TierAdministrationType`

GetTierAdministration returns the TierAdministration field if non-nil, zero value otherwise.

### GetTierAdministrationOk

`func (o *ReservationMembershipType) GetTierAdministrationOk() (*TierAdministrationType, bool)`

GetTierAdministrationOk returns a tuple with the TierAdministration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierAdministration

`func (o *ReservationMembershipType) SetTierAdministration(v TierAdministrationType)`

SetTierAdministration sets TierAdministration field to given value.

### HasTierAdministration

`func (o *ReservationMembershipType) HasTierAdministration() bool`

HasTierAdministration returns a boolean if a field has been set.

### GetUpgradeDescription

`func (o *ReservationMembershipType) GetUpgradeDescription() string`

GetUpgradeDescription returns the UpgradeDescription field if non-nil, zero value otherwise.

### GetUpgradeDescriptionOk

`func (o *ReservationMembershipType) GetUpgradeDescriptionOk() (*string, bool)`

GetUpgradeDescriptionOk returns a tuple with the UpgradeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeDescription

`func (o *ReservationMembershipType) SetUpgradeDescription(v string)`

SetUpgradeDescription sets UpgradeDescription field to given value.

### HasUpgradeDescription

`func (o *ReservationMembershipType) HasUpgradeDescription() bool`

HasUpgradeDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


