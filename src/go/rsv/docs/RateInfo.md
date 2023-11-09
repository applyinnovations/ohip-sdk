# RateInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** | Pointer to [**RateInfoDetail**](RateInfoDetail.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Summary** | Pointer to [**ReservationRateSummaryType**](ReservationRateSummaryType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRateInfo

`func NewRateInfo() *RateInfo`

NewRateInfo instantiates a new RateInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateInfoWithDefaults

`func NewRateInfoWithDefaults() *RateInfo`

NewRateInfoWithDefaults instantiates a new RateInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetail

`func (o *RateInfo) GetDetail() RateInfoDetail`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *RateInfo) GetDetailOk() (*RateInfoDetail, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *RateInfo) SetDetail(v RateInfoDetail)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *RateInfo) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetLinks

`func (o *RateInfo) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateInfo) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateInfo) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSummary

`func (o *RateInfo) GetSummary() ReservationRateSummaryType`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *RateInfo) GetSummaryOk() (*ReservationRateSummaryType, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *RateInfo) SetSummary(v ReservationRateSummaryType)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *RateInfo) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetWarnings

`func (o *RateInfo) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateInfo) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateInfo) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


