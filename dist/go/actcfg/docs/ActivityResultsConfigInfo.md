# ActivityResultsConfigInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityResultsConfiguration** | Pointer to [**[]ActivityResultsConfigDetailType**](ActivityResultsConfigDetailType.md) | List of configured Activity Results. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivityResultsConfigInfo

`func NewActivityResultsConfigInfo() *ActivityResultsConfigInfo`

NewActivityResultsConfigInfo instantiates a new ActivityResultsConfigInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityResultsConfigInfoWithDefaults

`func NewActivityResultsConfigInfoWithDefaults() *ActivityResultsConfigInfo`

NewActivityResultsConfigInfoWithDefaults instantiates a new ActivityResultsConfigInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityResultsConfiguration

`func (o *ActivityResultsConfigInfo) GetActivityResultsConfiguration() []ActivityResultsConfigDetailType`

GetActivityResultsConfiguration returns the ActivityResultsConfiguration field if non-nil, zero value otherwise.

### GetActivityResultsConfigurationOk

`func (o *ActivityResultsConfigInfo) GetActivityResultsConfigurationOk() (*[]ActivityResultsConfigDetailType, bool)`

GetActivityResultsConfigurationOk returns a tuple with the ActivityResultsConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityResultsConfiguration

`func (o *ActivityResultsConfigInfo) SetActivityResultsConfiguration(v []ActivityResultsConfigDetailType)`

SetActivityResultsConfiguration sets ActivityResultsConfiguration field to given value.

### HasActivityResultsConfiguration

`func (o *ActivityResultsConfigInfo) HasActivityResultsConfiguration() bool`

HasActivityResultsConfiguration returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityResultsConfigInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityResultsConfigInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityResultsConfigInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityResultsConfigInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

