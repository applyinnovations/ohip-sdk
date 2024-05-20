# CheckProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Results** | Pointer to [**[]CheckProfileResultType**](CheckProfileResultType.md) | Collection of status of allowed actions, attached records, and indicators of the profile. | [optional] 

## Methods

### NewCheckProfileType

`func NewCheckProfileType() *CheckProfileType`

NewCheckProfileType instantiates a new CheckProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckProfileTypeWithDefaults

`func NewCheckProfileTypeWithDefaults() *CheckProfileType`

NewCheckProfileTypeWithDefaults instantiates a new CheckProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *CheckProfileType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *CheckProfileType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *CheckProfileType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *CheckProfileType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetResults

`func (o *CheckProfileType) GetResults() []CheckProfileResultType`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *CheckProfileType) GetResultsOk() (*[]CheckProfileResultType, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *CheckProfileType) SetResults(v []CheckProfileResultType)`

SetResults sets Results field to given value.

### HasResults

`func (o *CheckProfileType) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


