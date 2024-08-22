# RateAnalysisType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to [**RateAnalysisCodeType**](RateAnalysisCodeType.md) |  | [optional] 
**Date** | Pointer to **string** | The date of the analysis. | [optional] 
**Description** | Pointer to **string** | The description of the restriction which was analyzed. | [optional] 

## Methods

### NewRateAnalysisType

`func NewRateAnalysisType() *RateAnalysisType`

NewRateAnalysisType instantiates a new RateAnalysisType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAnalysisTypeWithDefaults

`func NewRateAnalysisTypeWithDefaults() *RateAnalysisType`

NewRateAnalysisTypeWithDefaults instantiates a new RateAnalysisType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RateAnalysisType) GetCode() RateAnalysisCodeType`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RateAnalysisType) GetCodeOk() (*RateAnalysisCodeType, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RateAnalysisType) SetCode(v RateAnalysisCodeType)`

SetCode sets Code field to given value.

### HasCode

`func (o *RateAnalysisType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDate

`func (o *RateAnalysisType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *RateAnalysisType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *RateAnalysisType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *RateAnalysisType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetDescription

`func (o *RateAnalysisType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RateAnalysisType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RateAnalysisType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RateAnalysisType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


