# ChangeStagedProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeInstructions** | Pointer to [**StagedProfileChangeInstructionsType**](StagedProfileChangeInstructionsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**StagedProfile** | Pointer to [**StagedProfileType**](StagedProfileType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeStagedProfileRequest

`func NewChangeStagedProfileRequest() *ChangeStagedProfileRequest`

NewChangeStagedProfileRequest instantiates a new ChangeStagedProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeStagedProfileRequestWithDefaults

`func NewChangeStagedProfileRequestWithDefaults() *ChangeStagedProfileRequest`

NewChangeStagedProfileRequestWithDefaults instantiates a new ChangeStagedProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChangeInstructions

`func (o *ChangeStagedProfileRequest) GetChangeInstructions() StagedProfileChangeInstructionsType`

GetChangeInstructions returns the ChangeInstructions field if non-nil, zero value otherwise.

### GetChangeInstructionsOk

`func (o *ChangeStagedProfileRequest) GetChangeInstructionsOk() (*StagedProfileChangeInstructionsType, bool)`

GetChangeInstructionsOk returns a tuple with the ChangeInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeInstructions

`func (o *ChangeStagedProfileRequest) SetChangeInstructions(v StagedProfileChangeInstructionsType)`

SetChangeInstructions sets ChangeInstructions field to given value.

### HasChangeInstructions

`func (o *ChangeStagedProfileRequest) HasChangeInstructions() bool`

HasChangeInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeStagedProfileRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeStagedProfileRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeStagedProfileRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeStagedProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetStagedProfile

`func (o *ChangeStagedProfileRequest) GetStagedProfile() StagedProfileType`

GetStagedProfile returns the StagedProfile field if non-nil, zero value otherwise.

### GetStagedProfileOk

`func (o *ChangeStagedProfileRequest) GetStagedProfileOk() (*StagedProfileType, bool)`

GetStagedProfileOk returns a tuple with the StagedProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStagedProfile

`func (o *ChangeStagedProfileRequest) SetStagedProfile(v StagedProfileType)`

SetStagedProfile sets StagedProfile field to given value.

### HasStagedProfile

`func (o *ChangeStagedProfileRequest) HasStagedProfile() bool`

HasStagedProfile returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeStagedProfileRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeStagedProfileRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeStagedProfileRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeStagedProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


