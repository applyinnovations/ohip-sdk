# StagedProfileSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Country** | Pointer to [**CountryNameType**](CountryNameType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code associated with the staged profile. | [optional] 
**ImportDate** | Pointer to **string** | The date on which the staged profile has been received. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ProfileName** | Pointer to [**ProfileNameType**](ProfileNameType.md) |  | [optional] 
**ProfileType** | Pointer to **string** | Type of the staged profile. | [optional] 
**Region** | Pointer to **string** | The region of the staged profile. | [optional] 
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


