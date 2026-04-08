# ProcessStagedProfileResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code for the staged profile. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**StageStatus** | Pointer to **string** | The resulting profile status after processing the staged profile. | [optional] 
**Result** | Pointer to **string** | Processing/Rematching result for the staged profile. | [optional] 

## Methods

### NewProcessStagedProfileResultType

`func NewProcessStagedProfileResultType() *ProcessStagedProfileResultType`

NewProcessStagedProfileResultType instantiates a new ProcessStagedProfileResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessStagedProfileResultTypeWithDefaults

`func NewProcessStagedProfileResultTypeWithDefaults() *ProcessStagedProfileResultType`

NewProcessStagedProfileResultTypeWithDefaults instantiates a new ProcessStagedProfileResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ProcessStagedProfileResultType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProcessStagedProfileResultType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProcessStagedProfileResultType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProcessStagedProfileResultType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileId

`func (o *ProcessStagedProfileResultType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ProcessStagedProfileResultType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ProcessStagedProfileResultType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ProcessStagedProfileResultType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetStageStatus

`func (o *ProcessStagedProfileResultType) GetStageStatus() string`

GetStageStatus returns the StageStatus field if non-nil, zero value otherwise.

### GetStageStatusOk

`func (o *ProcessStagedProfileResultType) GetStageStatusOk() (*string, bool)`

GetStageStatusOk returns a tuple with the StageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStageStatus

`func (o *ProcessStagedProfileResultType) SetStageStatus(v string)`

SetStageStatus sets StageStatus field to given value.

### HasStageStatus

`func (o *ProcessStagedProfileResultType) HasStageStatus() bool`

HasStageStatus returns a boolean if a field has been set.

### GetResult

`func (o *ProcessStagedProfileResultType) GetResult() string`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *ProcessStagedProfileResultType) GetResultOk() (*string, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *ProcessStagedProfileResultType) SetResult(v string)`

SetResult sets Result field to given value.

### HasResult

`func (o *ProcessStagedProfileResultType) HasResult() bool`

HasResult returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


