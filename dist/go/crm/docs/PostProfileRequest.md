# PostProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**ProfileDetails** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ProfileAllowedActions** | Pointer to [**[]ProfileAllowedActionType**](ProfileAllowedActionType.md) | Allowed actions for profile operations. | [optional] 
**CopyInstructions** | Pointer to [**CopyInstructionsType**](CopyInstructionsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostProfileRequest

`func NewPostProfileRequest() *PostProfileRequest`

NewPostProfileRequest instantiates a new PostProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostProfileRequestWithDefaults

`func NewPostProfileRequestWithDefaults() *PostProfileRequest`

NewPostProfileRequestWithDefaults instantiates a new PostProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *PostProfileRequest) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *PostProfileRequest) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *PostProfileRequest) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *PostProfileRequest) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetExternalReferences

`func (o *PostProfileRequest) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *PostProfileRequest) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *PostProfileRequest) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *PostProfileRequest) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetProfileDetails

`func (o *PostProfileRequest) GetProfileDetails() ProfileType`

GetProfileDetails returns the ProfileDetails field if non-nil, zero value otherwise.

### GetProfileDetailsOk

`func (o *PostProfileRequest) GetProfileDetailsOk() (*ProfileType, bool)`

GetProfileDetailsOk returns a tuple with the ProfileDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDetails

`func (o *PostProfileRequest) SetProfileDetails(v ProfileType)`

SetProfileDetails sets ProfileDetails field to given value.

### HasProfileDetails

`func (o *PostProfileRequest) HasProfileDetails() bool`

HasProfileDetails returns a boolean if a field has been set.

### GetProfileAllowedActions

`func (o *PostProfileRequest) GetProfileAllowedActions() []ProfileAllowedActionType`

GetProfileAllowedActions returns the ProfileAllowedActions field if non-nil, zero value otherwise.

### GetProfileAllowedActionsOk

`func (o *PostProfileRequest) GetProfileAllowedActionsOk() (*[]ProfileAllowedActionType, bool)`

GetProfileAllowedActionsOk returns a tuple with the ProfileAllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAllowedActions

`func (o *PostProfileRequest) SetProfileAllowedActions(v []ProfileAllowedActionType)`

SetProfileAllowedActions sets ProfileAllowedActions field to given value.

### HasProfileAllowedActions

`func (o *PostProfileRequest) HasProfileAllowedActions() bool`

HasProfileAllowedActions returns a boolean if a field has been set.

### GetCopyInstructions

`func (o *PostProfileRequest) GetCopyInstructions() CopyInstructionsType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *PostProfileRequest) GetCopyInstructionsOk() (*CopyInstructionsType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *PostProfileRequest) SetCopyInstructions(v CopyInstructionsType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *PostProfileRequest) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *PostProfileRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostProfileRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostProfileRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostProfileRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostProfileRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostProfileRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


