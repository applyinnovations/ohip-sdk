# GeneratesSetupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddBaseAmtTo** | Pointer to [**GenerateCalculationBucketsType**](GenerateCalculationBucketsType.md) |  | [optional] 
**Generates** | Pointer to [**[]GenerateType**](GenerateType.md) | Defines the Generate and its Calculation Rules. | [optional] 

## Methods

### NewGeneratesSetupType

`func NewGeneratesSetupType() *GeneratesSetupType`

NewGeneratesSetupType instantiates a new GeneratesSetupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneratesSetupTypeWithDefaults

`func NewGeneratesSetupTypeWithDefaults() *GeneratesSetupType`

NewGeneratesSetupTypeWithDefaults instantiates a new GeneratesSetupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddBaseAmtTo

`func (o *GeneratesSetupType) GetAddBaseAmtTo() GenerateCalculationBucketsType`

GetAddBaseAmtTo returns the AddBaseAmtTo field if non-nil, zero value otherwise.

### GetAddBaseAmtToOk

`func (o *GeneratesSetupType) GetAddBaseAmtToOk() (*GenerateCalculationBucketsType, bool)`

GetAddBaseAmtToOk returns a tuple with the AddBaseAmtTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddBaseAmtTo

`func (o *GeneratesSetupType) SetAddBaseAmtTo(v GenerateCalculationBucketsType)`

SetAddBaseAmtTo sets AddBaseAmtTo field to given value.

### HasAddBaseAmtTo

`func (o *GeneratesSetupType) HasAddBaseAmtTo() bool`

HasAddBaseAmtTo returns a boolean if a field has been set.

### GetGenerates

`func (o *GeneratesSetupType) GetGenerates() []GenerateType`

GetGenerates returns the Generates field if non-nil, zero value otherwise.

### GetGeneratesOk

`func (o *GeneratesSetupType) GetGeneratesOk() (*[]GenerateType, bool)`

GetGeneratesOk returns a tuple with the Generates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerates

`func (o *GeneratesSetupType) SetGenerates(v []GenerateType)`

SetGenerates sets Generates field to given value.

### HasGenerates

`func (o *GeneratesSetupType) HasGenerates() bool`

HasGenerates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


