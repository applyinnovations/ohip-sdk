# PutCustomChargeExemptionsConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomChargeExemptionsConfig** | Pointer to [**[]CustomChargeExemptionsConfigType**](CustomChargeExemptionsConfigType.md) | Existing Custom Charge Exemptions to be changed. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutCustomChargeExemptionsConfigRequest

`func NewPutCustomChargeExemptionsConfigRequest() *PutCustomChargeExemptionsConfigRequest`

NewPutCustomChargeExemptionsConfigRequest instantiates a new PutCustomChargeExemptionsConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCustomChargeExemptionsConfigRequestWithDefaults

`func NewPutCustomChargeExemptionsConfigRequestWithDefaults() *PutCustomChargeExemptionsConfigRequest`

NewPutCustomChargeExemptionsConfigRequestWithDefaults instantiates a new PutCustomChargeExemptionsConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCustomChargeExemptionsConfig

`func (o *PutCustomChargeExemptionsConfigRequest) GetCustomChargeExemptionsConfig() []CustomChargeExemptionsConfigType`

GetCustomChargeExemptionsConfig returns the CustomChargeExemptionsConfig field if non-nil, zero value otherwise.

### GetCustomChargeExemptionsConfigOk

`func (o *PutCustomChargeExemptionsConfigRequest) GetCustomChargeExemptionsConfigOk() (*[]CustomChargeExemptionsConfigType, bool)`

GetCustomChargeExemptionsConfigOk returns a tuple with the CustomChargeExemptionsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeExemptionsConfig

`func (o *PutCustomChargeExemptionsConfigRequest) SetCustomChargeExemptionsConfig(v []CustomChargeExemptionsConfigType)`

SetCustomChargeExemptionsConfig sets CustomChargeExemptionsConfig field to given value.

### HasCustomChargeExemptionsConfig

`func (o *PutCustomChargeExemptionsConfigRequest) HasCustomChargeExemptionsConfig() bool`

HasCustomChargeExemptionsConfig returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCustomChargeExemptionsConfigRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCustomChargeExemptionsConfigRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCustomChargeExemptionsConfigRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCustomChargeExemptionsConfigRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


