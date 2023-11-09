# ChangeRateClassRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RateClass** | Pointer to [**RateClassType**](RateClassType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeRateClassRequest

`func NewChangeRateClassRequest() *ChangeRateClassRequest`

NewChangeRateClassRequest instantiates a new ChangeRateClassRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeRateClassRequestWithDefaults

`func NewChangeRateClassRequestWithDefaults() *ChangeRateClassRequest`

NewChangeRateClassRequestWithDefaults instantiates a new ChangeRateClassRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeRateClassRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeRateClassRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeRateClassRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeRateClassRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateClass

`func (o *ChangeRateClassRequest) GetRateClass() RateClassType`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *ChangeRateClassRequest) GetRateClassOk() (*RateClassType, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *ChangeRateClassRequest) SetRateClass(v RateClassType)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *ChangeRateClassRequest) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeRateClassRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeRateClassRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeRateClassRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeRateClassRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


