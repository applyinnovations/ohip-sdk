# PutProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalReferences** | Pointer to [**[]ExternalReferenceType**](ExternalReferenceType.md) | This type contains unique information of external reference. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ProfileAllowedActions** | Pointer to [**[]ProfileAllowedActionType**](ProfileAllowedActionType.md) | Allowed actions for profile operations. | [optional] 
**ProfileDetails** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutProfileRequest

`func NewPutProfileRequest() *PutProfileRequest`

NewPutProfileRequest instantiates a new PutProfileRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutProfileRequestWithDefaults

`func NewPutProfileRequestWithDefaults() *PutProfileRequest`

NewPutProfileRequestWithDefaults instantiates a new PutProfileRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalReferences

`func (o *PutProfileRequest) GetExternalReferences() []ExternalReferenceType`

GetExternalReferences returns the ExternalReferences field if non-nil, zero value otherwise.

### GetExternalReferencesOk

`func (o *PutProfileRequest) GetExternalReferencesOk() (*[]ExternalReferenceType, bool)`

GetExternalReferencesOk returns a tuple with the ExternalReferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalReferences

`func (o *PutProfileRequest) SetExternalReferences(v []ExternalReferenceType)`

SetExternalReferences sets ExternalReferences field to given value.

### HasExternalReferences

`func (o *PutProfileRequest) HasExternalReferences() bool`

HasExternalReferences returns a boolean if a field has been set.

### GetLinks

`func (o *PutProfileRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutProfileRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutProfileRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutProfileRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileAllowedActions

`func (o *PutProfileRequest) GetProfileAllowedActions() []ProfileAllowedActionType`

GetProfileAllowedActions returns the ProfileAllowedActions field if non-nil, zero value otherwise.

### GetProfileAllowedActionsOk

`func (o *PutProfileRequest) GetProfileAllowedActionsOk() (*[]ProfileAllowedActionType, bool)`

GetProfileAllowedActionsOk returns a tuple with the ProfileAllowedActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAllowedActions

`func (o *PutProfileRequest) SetProfileAllowedActions(v []ProfileAllowedActionType)`

SetProfileAllowedActions sets ProfileAllowedActions field to given value.

### HasProfileAllowedActions

`func (o *PutProfileRequest) HasProfileAllowedActions() bool`

HasProfileAllowedActions returns a boolean if a field has been set.

### GetProfileDetails

`func (o *PutProfileRequest) GetProfileDetails() ProfileType`

GetProfileDetails returns the ProfileDetails field if non-nil, zero value otherwise.

### GetProfileDetailsOk

`func (o *PutProfileRequest) GetProfileDetailsOk() (*ProfileType, bool)`

GetProfileDetailsOk returns a tuple with the ProfileDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileDetails

`func (o *PutProfileRequest) SetProfileDetails(v ProfileType)`

SetProfileDetails sets ProfileDetails field to given value.

### HasProfileDetails

`func (o *PutProfileRequest) HasProfileDetails() bool`

HasProfileDetails returns a boolean if a field has been set.

### GetProfileIdList

`func (o *PutProfileRequest) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *PutProfileRequest) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *PutProfileRequest) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *PutProfileRequest) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *PutProfileRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutProfileRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutProfileRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutProfileRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


