# ProfileEnrollmentTypeUrls

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UrlInfo** | Pointer to [**[]URLInfoType**](URLInfoType.md) | Collection of Detailed information on web url/address for the customer. | [optional] 
**AllRowsFetched** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewProfileEnrollmentTypeUrls

`func NewProfileEnrollmentTypeUrls() *ProfileEnrollmentTypeUrls`

NewProfileEnrollmentTypeUrls instantiates a new ProfileEnrollmentTypeUrls object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileEnrollmentTypeUrlsWithDefaults

`func NewProfileEnrollmentTypeUrlsWithDefaults() *ProfileEnrollmentTypeUrls`

NewProfileEnrollmentTypeUrlsWithDefaults instantiates a new ProfileEnrollmentTypeUrls object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrlInfo

`func (o *ProfileEnrollmentTypeUrls) GetUrlInfo() []URLInfoType`

GetUrlInfo returns the UrlInfo field if non-nil, zero value otherwise.

### GetUrlInfoOk

`func (o *ProfileEnrollmentTypeUrls) GetUrlInfoOk() (*[]URLInfoType, bool)`

GetUrlInfoOk returns a tuple with the UrlInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrlInfo

`func (o *ProfileEnrollmentTypeUrls) SetUrlInfo(v []URLInfoType)`

SetUrlInfo sets UrlInfo field to given value.

### HasUrlInfo

`func (o *ProfileEnrollmentTypeUrls) HasUrlInfo() bool`

HasUrlInfo returns a boolean if a field has been set.

### GetAllRowsFetched

`func (o *ProfileEnrollmentTypeUrls) GetAllRowsFetched() bool`

GetAllRowsFetched returns the AllRowsFetched field if non-nil, zero value otherwise.

### GetAllRowsFetchedOk

`func (o *ProfileEnrollmentTypeUrls) GetAllRowsFetchedOk() (*bool, bool)`

GetAllRowsFetchedOk returns a tuple with the AllRowsFetched field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllRowsFetched

`func (o *ProfileEnrollmentTypeUrls) SetAllRowsFetched(v bool)`

SetAllRowsFetched sets AllRowsFetched field to given value.

### HasAllRowsFetched

`func (o *ProfileEnrollmentTypeUrls) HasAllRowsFetched() bool`

HasAllRowsFetched returns a boolean if a field has been set.

### GetTotalRows

`func (o *ProfileEnrollmentTypeUrls) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *ProfileEnrollmentTypeUrls) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *ProfileEnrollmentTypeUrls) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *ProfileEnrollmentTypeUrls) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


