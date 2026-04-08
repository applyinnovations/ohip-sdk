# ResPeriodicFolioType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LastSettlementDate** | Pointer to **string** | Latest date when a direct bill settlement was automatically done using the \&quot;Direct Bill Batch Folios\&quot; option. | [optional] 
**LastFolioDate** | Pointer to **string** | Latest date when a folio was printed using the \&quot;Periodic Batch Folios\&quot; option | [optional] 
**Frequency** | Pointer to **int32** | Frequency in number of days when folios should be printed for this reservation. | [optional] 

## Methods

### NewResPeriodicFolioType

`func NewResPeriodicFolioType() *ResPeriodicFolioType`

NewResPeriodicFolioType instantiates a new ResPeriodicFolioType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResPeriodicFolioTypeWithDefaults

`func NewResPeriodicFolioTypeWithDefaults() *ResPeriodicFolioType`

NewResPeriodicFolioTypeWithDefaults instantiates a new ResPeriodicFolioType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLastSettlementDate

`func (o *ResPeriodicFolioType) GetLastSettlementDate() string`

GetLastSettlementDate returns the LastSettlementDate field if non-nil, zero value otherwise.

### GetLastSettlementDateOk

`func (o *ResPeriodicFolioType) GetLastSettlementDateOk() (*string, bool)`

GetLastSettlementDateOk returns a tuple with the LastSettlementDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSettlementDate

`func (o *ResPeriodicFolioType) SetLastSettlementDate(v string)`

SetLastSettlementDate sets LastSettlementDate field to given value.

### HasLastSettlementDate

`func (o *ResPeriodicFolioType) HasLastSettlementDate() bool`

HasLastSettlementDate returns a boolean if a field has been set.

### GetLastFolioDate

`func (o *ResPeriodicFolioType) GetLastFolioDate() string`

GetLastFolioDate returns the LastFolioDate field if non-nil, zero value otherwise.

### GetLastFolioDateOk

`func (o *ResPeriodicFolioType) GetLastFolioDateOk() (*string, bool)`

GetLastFolioDateOk returns a tuple with the LastFolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastFolioDate

`func (o *ResPeriodicFolioType) SetLastFolioDate(v string)`

SetLastFolioDate sets LastFolioDate field to given value.

### HasLastFolioDate

`func (o *ResPeriodicFolioType) HasLastFolioDate() bool`

HasLastFolioDate returns a boolean if a field has been set.

### GetFrequency

`func (o *ResPeriodicFolioType) GetFrequency() int32`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *ResPeriodicFolioType) GetFrequencyOk() (*int32, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *ResPeriodicFolioType) SetFrequency(v int32)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *ResPeriodicFolioType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


