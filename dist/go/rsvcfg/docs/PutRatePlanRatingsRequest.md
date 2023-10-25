# PutRatePlanRatingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RatePlanRatingsInfo** | Pointer to [**[]RatePlanRatingInfoType**](RatePlanRatingInfoType.md) | Collection of rate plan Codes and their ratings. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutRatePlanRatingsRequest

`func NewPutRatePlanRatingsRequest() *PutRatePlanRatingsRequest`

NewPutRatePlanRatingsRequest instantiates a new PutRatePlanRatingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRatePlanRatingsRequestWithDefaults

`func NewPutRatePlanRatingsRequestWithDefaults() *PutRatePlanRatingsRequest`

NewPutRatePlanRatingsRequestWithDefaults instantiates a new PutRatePlanRatingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRatePlanRatingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRatePlanRatingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRatePlanRatingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRatePlanRatingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlanRatingsInfo

`func (o *PutRatePlanRatingsRequest) GetRatePlanRatingsInfo() []RatePlanRatingInfoType`

GetRatePlanRatingsInfo returns the RatePlanRatingsInfo field if non-nil, zero value otherwise.

### GetRatePlanRatingsInfoOk

`func (o *PutRatePlanRatingsRequest) GetRatePlanRatingsInfoOk() (*[]RatePlanRatingInfoType, bool)`

GetRatePlanRatingsInfoOk returns a tuple with the RatePlanRatingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanRatingsInfo

`func (o *PutRatePlanRatingsRequest) SetRatePlanRatingsInfo(v []RatePlanRatingInfoType)`

SetRatePlanRatingsInfo sets RatePlanRatingsInfo field to given value.

### HasRatePlanRatingsInfo

`func (o *PutRatePlanRatingsRequest) HasRatePlanRatingsInfo() bool`

HasRatePlanRatingsInfo returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRatePlanRatingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRatePlanRatingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRatePlanRatingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRatePlanRatingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


