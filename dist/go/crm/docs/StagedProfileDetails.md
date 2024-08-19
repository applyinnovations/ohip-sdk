# StagedProfileDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**StagedProfile** | Pointer to [**StagedProfileType**](StagedProfileType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStagedProfileDetails

`func NewStagedProfileDetails() *StagedProfileDetails`

NewStagedProfileDetails instantiates a new StagedProfileDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileDetailsWithDefaults

`func NewStagedProfileDetailsWithDefaults() *StagedProfileDetails`

NewStagedProfileDetailsWithDefaults instantiates a new StagedProfileDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *StagedProfileDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StagedProfileDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StagedProfileDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StagedProfileDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetStagedProfile

`func (o *StagedProfileDetails) GetStagedProfile() StagedProfileType`

GetStagedProfile returns the StagedProfile field if non-nil, zero value otherwise.

### GetStagedProfileOk

`func (o *StagedProfileDetails) GetStagedProfileOk() (*StagedProfileType, bool)`

GetStagedProfileOk returns a tuple with the StagedProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStagedProfile

`func (o *StagedProfileDetails) SetStagedProfile(v StagedProfileType)`

SetStagedProfile sets StagedProfile field to given value.

### HasStagedProfile

`func (o *StagedProfileDetails) HasStagedProfile() bool`

HasStagedProfile returns a boolean if a field has been set.

### GetWarnings

`func (o *StagedProfileDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StagedProfileDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StagedProfileDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StagedProfileDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


