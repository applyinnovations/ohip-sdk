# StagedProfileSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code associated with the staged profile. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**InternalProfileName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**PrimaryMembershipCardNo** | Pointer to **string** | Indicates the primary membership card number of a staged profile | [optional] 
**MembershipEnrollmentCode** | Pointer to **string** | Membership enrollment code of a staged profile. | [optional] 
**MembershipExpirationDate** | Pointer to **string** | Indicates the expiry date of a staged membership profile. | [optional] 
**MembershipLevel** | Pointer to **string** | Indicates the membership level of a staged membership profile. | [optional] 
**StagedProfileReasons** | Pointer to [**[]StagedReasonsType**](StagedReasonsType.md) | Describes the reasons why a profile got staged. | [optional] 
**ImportDate** | Pointer to **string** | The date on which the staged profile has been received. | [optional] 
**ProfileType** | Pointer to **string** | Type of the staged profile. | [optional] 
**Region** | Pointer to **string** | The region of the staged profile. | [optional] 
**Country** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**StageStatus** | Pointer to [**StagedProfileStatus**](StagedProfileStatus.md) |  | [optional] 

## Methods

### NewStagedProfileSummaryType

`func NewStagedProfileSummaryType() *StagedProfileSummaryType`

NewStagedProfileSummaryType instantiates a new StagedProfileSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileSummaryTypeWithDefaults

`func NewStagedProfileSummaryTypeWithDefaults() *StagedProfileSummaryType`

NewStagedProfileSummaryTypeWithDefaults instantiates a new StagedProfileSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *StagedProfileSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StagedProfileSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StagedProfileSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StagedProfileSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileIdList

`func (o *StagedProfileSummaryType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *StagedProfileSummaryType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *StagedProfileSummaryType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *StagedProfileSummaryType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfileName

`func (o *StagedProfileSummaryType) GetProfileName() ProfileNameType`

GetProfileName returns the ProfileName field if non-nil, zero value otherwise.

### GetProfileNameOk

`func (o *StagedProfileSummaryType) GetProfileNameOk() (*ProfileNameType, bool)`

GetProfileNameOk returns a tuple with the ProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileName

`func (o *StagedProfileSummaryType) SetProfileName(v ProfileNameType)`

SetProfileName sets ProfileName field to given value.

### HasProfileName

`func (o *StagedProfileSummaryType) HasProfileName() bool`

HasProfileName returns a boolean if a field has been set.

### GetInternalProfileName

`func (o *StagedProfileSummaryType) GetInternalProfileName() ProfileNameType`

GetInternalProfileName returns the InternalProfileName field if non-nil, zero value otherwise.

### GetInternalProfileNameOk

`func (o *StagedProfileSummaryType) GetInternalProfileNameOk() (*ProfileNameType, bool)`

GetInternalProfileNameOk returns a tuple with the InternalProfileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalProfileName

`func (o *StagedProfileSummaryType) SetInternalProfileName(v ProfileNameType)`

SetInternalProfileName sets InternalProfileName field to given value.

### HasInternalProfileName

`func (o *StagedProfileSummaryType) HasInternalProfileName() bool`

HasInternalProfileName returns a boolean if a field has been set.

### GetPrimaryMembershipCardNo

`func (o *StagedProfileSummaryType) GetPrimaryMembershipCardNo() string`

GetPrimaryMembershipCardNo returns the PrimaryMembershipCardNo field if non-nil, zero value otherwise.

### GetPrimaryMembershipCardNoOk

`func (o *StagedProfileSummaryType) GetPrimaryMembershipCardNoOk() (*string, bool)`

GetPrimaryMembershipCardNoOk returns a tuple with the PrimaryMembershipCardNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryMembershipCardNo

`func (o *StagedProfileSummaryType) SetPrimaryMembershipCardNo(v string)`

SetPrimaryMembershipCardNo sets PrimaryMembershipCardNo field to given value.

### HasPrimaryMembershipCardNo

`func (o *StagedProfileSummaryType) HasPrimaryMembershipCardNo() bool`

HasPrimaryMembershipCardNo returns a boolean if a field has been set.

### GetMembershipEnrollmentCode

`func (o *StagedProfileSummaryType) GetMembershipEnrollmentCode() string`

GetMembershipEnrollmentCode returns the MembershipEnrollmentCode field if non-nil, zero value otherwise.

### GetMembershipEnrollmentCodeOk

`func (o *StagedProfileSummaryType) GetMembershipEnrollmentCodeOk() (*string, bool)`

GetMembershipEnrollmentCodeOk returns a tuple with the MembershipEnrollmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipEnrollmentCode

`func (o *StagedProfileSummaryType) SetMembershipEnrollmentCode(v string)`

SetMembershipEnrollmentCode sets MembershipEnrollmentCode field to given value.

### HasMembershipEnrollmentCode

`func (o *StagedProfileSummaryType) HasMembershipEnrollmentCode() bool`

HasMembershipEnrollmentCode returns a boolean if a field has been set.

### GetMembershipExpirationDate

`func (o *StagedProfileSummaryType) GetMembershipExpirationDate() string`

GetMembershipExpirationDate returns the MembershipExpirationDate field if non-nil, zero value otherwise.

### GetMembershipExpirationDateOk

`func (o *StagedProfileSummaryType) GetMembershipExpirationDateOk() (*string, bool)`

GetMembershipExpirationDateOk returns a tuple with the MembershipExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipExpirationDate

`func (o *StagedProfileSummaryType) SetMembershipExpirationDate(v string)`

SetMembershipExpirationDate sets MembershipExpirationDate field to given value.

### HasMembershipExpirationDate

`func (o *StagedProfileSummaryType) HasMembershipExpirationDate() bool`

HasMembershipExpirationDate returns a boolean if a field has been set.

### GetMembershipLevel

`func (o *StagedProfileSummaryType) GetMembershipLevel() string`

GetMembershipLevel returns the MembershipLevel field if non-nil, zero value otherwise.

### GetMembershipLevelOk

`func (o *StagedProfileSummaryType) GetMembershipLevelOk() (*string, bool)`

GetMembershipLevelOk returns a tuple with the MembershipLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipLevel

`func (o *StagedProfileSummaryType) SetMembershipLevel(v string)`

SetMembershipLevel sets MembershipLevel field to given value.

### HasMembershipLevel

`func (o *StagedProfileSummaryType) HasMembershipLevel() bool`

HasMembershipLevel returns a boolean if a field has been set.

### GetStagedProfileReasons

`func (o *StagedProfileSummaryType) GetStagedProfileReasons() []StagedReasonsType`

GetStagedProfileReasons returns the StagedProfileReasons field if non-nil, zero value otherwise.

### GetStagedProfileReasonsOk

`func (o *StagedProfileSummaryType) GetStagedProfileReasonsOk() (*[]StagedReasonsType, bool)`

GetStagedProfileReasonsOk returns a tuple with the StagedProfileReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStagedProfileReasons

`func (o *StagedProfileSummaryType) SetStagedProfileReasons(v []StagedReasonsType)`

SetStagedProfileReasons sets StagedProfileReasons field to given value.

### HasStagedProfileReasons

`func (o *StagedProfileSummaryType) HasStagedProfileReasons() bool`

HasStagedProfileReasons returns a boolean if a field has been set.

### GetImportDate

`func (o *StagedProfileSummaryType) GetImportDate() string`

GetImportDate returns the ImportDate field if non-nil, zero value otherwise.

### GetImportDateOk

`func (o *StagedProfileSummaryType) GetImportDateOk() (*string, bool)`

GetImportDateOk returns a tuple with the ImportDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportDate

`func (o *StagedProfileSummaryType) SetImportDate(v string)`

SetImportDate sets ImportDate field to given value.

### HasImportDate

`func (o *StagedProfileSummaryType) HasImportDate() bool`

HasImportDate returns a boolean if a field has been set.

### GetProfileType

`func (o *StagedProfileSummaryType) GetProfileType() string`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *StagedProfileSummaryType) GetProfileTypeOk() (*string, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *StagedProfileSummaryType) SetProfileType(v string)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *StagedProfileSummaryType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetRegion

`func (o *StagedProfileSummaryType) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *StagedProfileSummaryType) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *StagedProfileSummaryType) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *StagedProfileSummaryType) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetCountry

`func (o *StagedProfileSummaryType) GetCountry() CountryNameType`

GetCountry returns the Country field if non-nil, zero value otherwise.

### GetCountryOk

`func (o *StagedProfileSummaryType) GetCountryOk() (*CountryNameType, bool)`

GetCountryOk returns a tuple with the Country field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountry

`func (o *StagedProfileSummaryType) SetCountry(v CountryNameType)`

SetCountry sets Country field to given value.

### HasCountry

`func (o *StagedProfileSummaryType) HasCountry() bool`

HasCountry returns a boolean if a field has been set.

### GetStageStatus

`func (o *StagedProfileSummaryType) GetStageStatus() StagedProfileStatus`

GetStageStatus returns the StageStatus field if non-nil, zero value otherwise.

### GetStageStatusOk

`func (o *StagedProfileSummaryType) GetStageStatusOk() (*StagedProfileStatus, bool)`

GetStageStatusOk returns a tuple with the StageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStageStatus

`func (o *StagedProfileSummaryType) SetStageStatus(v StagedProfileStatus)`

SetStageStatus sets StageStatus field to given value.

### HasStageStatus

`func (o *StagedProfileSummaryType) HasStageStatus() bool`

HasStageStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


