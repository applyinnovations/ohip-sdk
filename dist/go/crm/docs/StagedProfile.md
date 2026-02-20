# StagedProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StagedProfile** | Pointer to [**StagedProfileType**](StagedProfileType.md) |  | [optional] 
**ChangeInstructions** | Pointer to [**StagedProfileChangeInstructionsType**](StagedProfileChangeInstructionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStagedProfile

`func NewStagedProfile() *StagedProfile`

NewStagedProfile instantiates a new StagedProfile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileWithDefaults

`func NewStagedProfileWithDefaults() *StagedProfile`

NewStagedProfileWithDefaults instantiates a new StagedProfile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStagedProfile

`func (o *StagedProfile) GetStagedProfile() StagedProfileType`

GetStagedProfile returns the StagedProfile field if non-nil, zero value otherwise.

### GetStagedProfileOk

`func (o *StagedProfile) GetStagedProfileOk() (*StagedProfileType, bool)`

GetStagedProfileOk returns a tuple with the StagedProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStagedProfile

`func (o *StagedProfile) SetStagedProfile(v StagedProfileType)`

SetStagedProfile sets StagedProfile field to given value.

### HasStagedProfile

`func (o *StagedProfile) HasStagedProfile() bool`

HasStagedProfile returns a boolean if a field has been set.

### GetChangeInstructions

`func (o *StagedProfile) GetChangeInstructions() StagedProfileChangeInstructionsType`

GetChangeInstructions returns the ChangeInstructions field if non-nil, zero value otherwise.

### GetChangeInstructionsOk

`func (o *StagedProfile) GetChangeInstructionsOk() (*StagedProfileChangeInstructionsType, bool)`

GetChangeInstructionsOk returns a tuple with the ChangeInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeInstructions

`func (o *StagedProfile) SetChangeInstructions(v StagedProfileChangeInstructionsType)`

SetChangeInstructions sets ChangeInstructions field to given value.

### HasChangeInstructions

`func (o *StagedProfile) HasChangeInstructions() bool`

HasChangeInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *StagedProfile) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StagedProfile) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StagedProfile) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StagedProfile) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StagedProfile) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StagedProfile) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StagedProfile) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StagedProfile) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


