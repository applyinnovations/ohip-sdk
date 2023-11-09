# ProfileTypePreferenceCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreferenceType** | Pointer to [**[]PreferenceTypeType**](PreferenceTypeType.md) | Collection of Detailed information on preferences of the customer. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileTypePreferenceCollection

`func NewProfileTypePreferenceCollection() *ProfileTypePreferenceCollection`

NewProfileTypePreferenceCollection instantiates a new ProfileTypePreferenceCollection object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileTypePreferenceCollectionWithDefaults

`func NewProfileTypePreferenceCollectionWithDefaults() *ProfileTypePreferenceCollection`

NewProfileTypePreferenceCollectionWithDefaults instantiates a new ProfileTypePreferenceCollection object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreferenceType

`func (o *ProfileTypePreferenceCollection) GetPreferenceType() []PreferenceTypeType`

GetPreferenceType returns the PreferenceType field if non-nil, zero value otherwise.

### GetPreferenceTypeOk

`func (o *ProfileTypePreferenceCollection) GetPreferenceTypeOk() (*[]PreferenceTypeType, bool)`

GetPreferenceTypeOk returns a tuple with the PreferenceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceType

`func (o *ProfileTypePreferenceCollection) SetPreferenceType(v []PreferenceTypeType)`

SetPreferenceType sets PreferenceType field to given value.

### HasPreferenceType

`func (o *ProfileTypePreferenceCollection) HasPreferenceType() bool`

HasPreferenceType returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileTypePreferenceCollection) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileTypePreferenceCollection) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileTypePreferenceCollection) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileTypePreferenceCollection) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


