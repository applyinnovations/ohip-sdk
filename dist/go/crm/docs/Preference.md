# Preference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreferenceCollections** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Detailed information of preferences related to the profile | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPreference

`func NewPreference() *Preference`

NewPreference instantiates a new Preference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferenceWithDefaults

`func NewPreferenceWithDefaults() *Preference`

NewPreferenceWithDefaults instantiates a new Preference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceCollections

`func (o *Preference) GetPreferenceCollections() []PreferenceTypeType`

GetPreferenceCollections returns the PreferenceCollections field if non-nil, zero value otherwise.

### GetPreferenceCollectionsOk

`func (o *Preference) GetPreferenceCollectionsOk() (*[]PreferenceTypeType, bool)`

GetPreferenceCollectionsOk returns a tuple with the PreferenceCollections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceCollections

`func (o *Preference) SetPreferenceCollections(v []PreferenceTypeType)`

SetPreferenceCollections sets PreferenceCollections field to given value.

### HasPreferenceCollections

`func (o *Preference) HasPreferenceCollections() bool`

HasPreferenceCollections returns a boolean if a field has been set.

### GetProfileIdList

`func (o *Preference) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *Preference) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *Preference) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *Preference) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetLinks

`func (o *Preference) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Preference) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Preference) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Preference) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Preference) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Preference) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Preference) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Preference) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


