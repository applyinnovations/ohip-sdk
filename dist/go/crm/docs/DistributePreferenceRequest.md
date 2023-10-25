# DistributePreferenceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PreferenceCollections** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Detailed information of preferences related to the profile | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDistributePreferenceRequest

`func NewDistributePreferenceRequest() *DistributePreferenceRequest`

NewDistributePreferenceRequest instantiates a new DistributePreferenceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributePreferenceRequestWithDefaults

`func NewDistributePreferenceRequestWithDefaults() *DistributePreferenceRequest`

NewDistributePreferenceRequestWithDefaults instantiates a new DistributePreferenceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DistributePreferenceRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DistributePreferenceRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DistributePreferenceRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DistributePreferenceRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPreferenceCollections

`func (o *DistributePreferenceRequest) GetPreferenceCollections() []PreferenceTypeType`

GetPreferenceCollections returns the PreferenceCollections field if non-nil, zero value otherwise.

### GetPreferenceCollectionsOk

`func (o *DistributePreferenceRequest) GetPreferenceCollectionsOk() (*[]PreferenceTypeType, bool)`

GetPreferenceCollectionsOk returns a tuple with the PreferenceCollections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollections

`func (o *DistributePreferenceRequest) SetPreferenceCollections(v []PreferenceTypeType)`

SetPreferenceCollections sets PreferenceCollections field to given value.

### HasPreferenceCollections

`func (o *DistributePreferenceRequest) HasPreferenceCollections() bool`

HasPreferenceCollections returns a boolean if a field has been set.

### GetProfileIdList

`func (o *DistributePreferenceRequest) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *DistributePreferenceRequest) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *DistributePreferenceRequest) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *DistributePreferenceRequest) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetWarnings

`func (o *DistributePreferenceRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DistributePreferenceRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DistributePreferenceRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DistributePreferenceRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


