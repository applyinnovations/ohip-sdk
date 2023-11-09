# PostAutoTraceCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoTraceCodesConfig** | Pointer to [**AutoTraceCodesListType**](AutoTraceCodesListType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAutoTraceCodesRequest

`func NewPostAutoTraceCodesRequest() *PostAutoTraceCodesRequest`

NewPostAutoTraceCodesRequest instantiates a new PostAutoTraceCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAutoTraceCodesRequestWithDefaults

`func NewPostAutoTraceCodesRequestWithDefaults() *PostAutoTraceCodesRequest`

NewPostAutoTraceCodesRequestWithDefaults instantiates a new PostAutoTraceCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoTraceCodesConfig

`func (o *PostAutoTraceCodesRequest) GetAutoTraceCodesConfig() AutoTraceCodesListType`

GetAutoTraceCodesConfig returns the AutoTraceCodesConfig field if non-nil, zero value otherwise.

### GetAutoTraceCodesConfigOk

`func (o *PostAutoTraceCodesRequest) GetAutoTraceCodesConfigOk() (*AutoTraceCodesListType, bool)`

GetAutoTraceCodesConfigOk returns a tuple with the AutoTraceCodesConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoTraceCodesConfig

`func (o *PostAutoTraceCodesRequest) SetAutoTraceCodesConfig(v AutoTraceCodesListType)`

SetAutoTraceCodesConfig sets AutoTraceCodesConfig field to given value.

### HasAutoTraceCodesConfig

`func (o *PostAutoTraceCodesRequest) HasAutoTraceCodesConfig() bool`

HasAutoTraceCodesConfig returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAutoTraceCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAutoTraceCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAutoTraceCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAutoTraceCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


